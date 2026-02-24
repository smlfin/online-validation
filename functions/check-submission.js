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
        const code = (body.code || '').toString().trim();

        if (!code) {
            return {
                statusCode: 400,
                headers: { 'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify({ error: 'Missing employee code.' })
            };
        }

        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT),
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });
        const sheets = google.sheets({ version: 'v4', auth });

        const spreadsheetId = '1dVJsvyms3XHVHJ47c2b0RuSIIG9PseXEiRU5fJ8md04';

        // Fetch column C (Employee Code) starting from row 2 to skip the header row
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Sheet1!C2:C',
        });

        const rows = response.data.values || [];
        // Trim whitespace on stored codes before comparing
        const existingCodes = rows.map(row => (row[0] || '').toString().trim());

        if (existingCodes.includes(code)) {
            return {
                statusCode: 409,
                headers: { 'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify({ message: 'Employee code already exists. Test already submitted.' })
            };
        }

        return {
            statusCode: 200,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ message: 'Employee code is new. Proceed with test.' })
        };

    } catch (error) {
        console.error('Error in check-submission:', error);
        return {
            statusCode: 500,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ error: 'Failed to check employee code. Please try again.' })
        };
    }
};
