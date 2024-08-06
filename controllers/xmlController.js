// controllers/xmlController.js
const { parseString } = require('xml2js');

exports.parseXmlToJson = (req, res) => {
    const xmlData = req.body.xml;

    if (!xmlData) {
        return res.status(400).send({ error: 'No XML data provided' });
    }

    parseString(xmlData, (err, result) => {
        if (err) {
            return res.status(500).send({ error: 'Failed to parse XML', details: err.message });
        }
        res.send(result);
    });
};
