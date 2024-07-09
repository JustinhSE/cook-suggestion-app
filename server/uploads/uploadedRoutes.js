const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), (req, file, res) => {
    try {
        console.log('File upload request received');
        if (!req.file) {
            console.log('No file uploaded');
            return res.status(400).send('No file uploaded.');
        }
        console.log('File uploaded:', req.file);
        res.status(200).json({
            message: 'File uploaded successfully',
            filename: req.file.filename
        });
    } catch (error) {
        console.error('Error in file upload:', error);
        res.status(500).json({ error: error.toString() });
    }
});

module.exports = router;
