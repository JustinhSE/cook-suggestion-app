const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const imageController = require('../controllers/imageController');
router.post('/upload', upload.single('image'), (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }
  
      // Process the file...
  
      res.status(200).json({
        message: 'File uploaded successfully',
        filename: req.file.filename,
        path: req.file.path
      });
    } catch (error) {
      console.error('Error in file upload:', error);
      res.status(500).json({ error: error.message });
    }
  });
  
module.exports = router;