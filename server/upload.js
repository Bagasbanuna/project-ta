const multer = require('multer');
const routeUpload = require('express').Router();
const fs = require('fs')
const uuid = require('uuid')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync('./uploads/')) {
            fs.mkdirSync('./uploads/');
        }
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null,uuid.v4() + file.originalname);
    }
});

// upload image with multer
routeUpload.post('/', multer({ storage: storage }).array('file'), (req, res) => {
    //   console.log(req.files);
    res.status(200).json({
        message: 'Upload success',
        data: req.files.map(file => {
            return {
                name: file.filename
            }
        })
    });
})

module.exports = {routeUpload}