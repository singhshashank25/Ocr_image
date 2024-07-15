const express = require('express');
const router = express.Router();
const Tesseract = require('tesseract.js');
const upload = require("../middelware/upload");

router.post('/upload', upload.single('image'), async(req,res)=>{
    const { file } = req;
    if (!file) return res.status(400).send('No file uploaded.');
    const imagePath = file.path;
    
    Tesseract.recognize(imagePath,'eng',{logger :e => console.log(e)}).then(data =>console.log(data.data.text
    ));
     res.json(imagePath);
});

module.exports = router;