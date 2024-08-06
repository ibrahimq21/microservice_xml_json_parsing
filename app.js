// app.js
const express = require('express');
const bodyParser = require('body-parser');
const xmlRoutes = require('./routes/xmlRoutes');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the routes defined in xmlRoutes
app.use('/api', xmlRoutes);

app.listen(port, () => {
    console.log(`XML to JSON parser service running at http://localhost:${port}`);
});
