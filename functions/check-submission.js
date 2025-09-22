const { google } = require('googleapis');

exports.handler = async (event) => {
    try {
        const { code } = JSON.parse(event.body);

        if (!code) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing employee code.' })
            };
        }

        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT),
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });
        const sheets = google.sheets({ version: 'v4', auth });

        const spreadsheetId = '1dVJsvyms3XHVHJ47c2b0RuSIIG9PseXEiRU5fJ8md04';
        const range = 'Sheet1!C:C'; // Check only the column with the Employee Code

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const existingCodes = response.data.values ? response.data.values.map(row => row[0]) : [];
        
        if (existingCodes.includes(code)) {
            return {
                statusCode: 409, // Conflict
                body: JSON.stringify({ message: 'Employee code already exists.' })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Employee code is new.' })
        };
    } catch (error) {
        console.error('Error checking for existing submission:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to check employee code.' })
        };
    }
};