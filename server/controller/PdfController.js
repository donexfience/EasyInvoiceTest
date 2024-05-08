const generateMessage = async (req, res, next) => {
    try {
      const message = "Your message here";
      req.generatedMessage = message;
      next();
    } catch (error) {
      console.error('Error generating message:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = { generateMessage };