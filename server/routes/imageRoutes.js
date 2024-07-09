const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const imageController = require('../controllers/imageController');

router.post('/upload', upload.single('image'), imageController.uploadAndDetect);

module.exports = router;