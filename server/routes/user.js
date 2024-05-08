const express = require("express");
const { generateMessage } = require("../controller/PdfController");
const { generatePDF } = require("../controller/pdfGenerator");
const router = express.Router();
router.get("/", generateMessage);
router.get("/invoice-pdf", generatePDF);

module.exports = router;
