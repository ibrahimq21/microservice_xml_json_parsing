// routes/xmlRoutes.js
const express = require('express');
const router = express.Router();
const xmlController = require('../controllers/xmlController');

router.post('/parse-xml', xmlController.parseXmlToJson);

module.exports = router;
