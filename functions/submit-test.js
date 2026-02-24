const { google } = require('googleapis');

exports.handler = async (event) => {
    // Handle CORS preflight
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: ''
        };
    }

    try {
        const body = JSON.parse(event.body);
        const { details, score, grade } = body;

        if (!details || !details.name || !details.code || !details.designation || !details.branch) {
            return {
                statusCode: 400,
                headers: { 'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify({ error: 'Missing required employee details.' })
            };
        }

        if (score === undefined || score === null || !grade) {
            return {
                statusCode: 400,
                headers: { 'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify({ error: 'Missing score or grade.' })
            };
        }

        const employeeCode = details.code.toString().trim();

        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const sheets = google.sheets({ version: 'v4', auth });

        const spreadsheetId = '1dVJsvyms3XHVHJ47c2b0RuSIIG9PseXEiRU5fJ8md04';

        // ── Step 1: Re-check for duplicate (server-side guard) ──
        // Read from C2 onwards to skip the header in C1
        const checkResponse = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Sheet1!C2:C',
        });

        const rows = checkResponse.data.values || [];
        const existingCodes = rows.map(row => (row[0] || '').toString().trim());

        if (existingCodes.includes(employeeCode)) {
            return {
                statusCode: 409,
                headers: { 'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify({ error: 'This Employee Code has already submitted the test.' })
            };
        }

        // ── Step 2: Append new row ──
        // Columns: A=Timestamp, B=Employee Name, C=Employee Code,
        //          D=Designation, E=Branch, F=Score, G=Grade
        const timestamp = new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        const newRow = [
            timestamp,
            details.name.trim(),
            employeeCode,
            details.designation.trim(),
            details.branch.trim(),
            score,
            grade
        ];

        // Using Sheet1!A:A as the range for append — Google Sheets will
        // automatically find the first empty row after the last filled row.
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A:A',
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            resource: { values: [newRow] }
        });

        return {
            statusCode: 200,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({
                message: 'Test submission saved successfully.',
                employee: details.name,
                score: score,
                grade: grade
            })
        };

    } catch (error) {
        console.error('Error in submit-test:', error);
        return {
            statusCode: 500,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ error: 'Failed to save submission. Please contact the administrator.' })
        };
    }
};
