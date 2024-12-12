const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

app.post('/save-data', async (req, res) => {
    const data = req.body;
    const fileName = 'clients/results-' + new Date().toISOString() + '.json';
    const content = Buffer.from(JSON.stringify(data)).toString('base64');
    const url = `https://api.github.com/repos/Radilovk/client-data-system/contents/${fileName}`;

    try {
        const response = await axios.put(url, {
            message: 'Upload survey result',
            content: content
        }, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`
            }
        });
        res.status(200).send('Data saved successfully');
    } catch (error) {
        res.status(500).send('Error saving data');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
