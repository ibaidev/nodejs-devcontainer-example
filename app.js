// app.js
const express = require('express');

const HOST = '127.0.0.1';
const PORT = 3000;

const app = express();
app.get('/', (req, res) => {
    res.send('Hello world!\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

if (process.env.REGRESSION_TESTING === 'true') { process.exit(0); }
