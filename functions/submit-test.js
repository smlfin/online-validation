const { google } = require('googleapis');

exports.handler = async (event) => {
    try {
        const { details, score, grade } = JSON.parse(event.body);
        const { name, code, designation, branch } = details;

        if (!name || !code || !designation || !branch || score === undefined || !grade) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required data.' })
            };
        }

        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const sheets = google.sheets({ version: 'v4', auth });

        const spreadsheetId = '1dVJsvyms3XHVHJ47c2b0RuSIIG9PseXEiRU5fJ8md04';
        const range = 'Sheet1!C:C'; // Look only at the column with the employee code.

        // Get all employee codes from the sheet
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const existingCodes = response.data.values ? response.data.values.map(row => row[0]) : [];
        
        // Check if the current employee code already exists in the sheet
        if (existingCodes.includes(code)) {
            return {
                statusCode: 409, // Conflict
                body: JSON.stringify({ error: 'This Employee Code has already submitted the test.' })
            };
        }

        // If the code is new, append the new data
        const values = [
            [new Date().toISOString(), name, code, designation, branch, score, grade]
        ];
        const resource = { values };
        
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A2',
            valueInputOption: 'RAW',
            resource,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data saved to Google Sheet!' })
        };
    } catch (error) {
        console.error('Error writing to Google Sheet:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to write data.' })
        };
    }
};