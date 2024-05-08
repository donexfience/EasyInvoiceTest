const PDFDocument = require('pdfkit');
const { Readable } = require('stream');

const generatePDF = async (req, res) => {
  try {
    // Getting message from req
    const message = req.generatedMessage || "Default message";

    // Create a new PDF document
    const doc = new PDFDocument();

    // Collect PDF content in a buffer
    const pdfBuffer = [];
    doc.on('data', (chunk) => {
      pdfBuffer.push(chunk);
    });
    doc.on('end', () => {
      // Concatenate all chunks into a single buffer
      const pdfData = Buffer.concat(pdfBuffer);

      // Set response headers for PDF
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="message.pdf"');

      // Send the PDF data in the response
      res.send(pdfData);
    });

    // Add text to the PDF document
    doc.fontSize(12).text(message, 50, 50);

    // Finalize the PDF document
    doc.end();
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { generatePDF };