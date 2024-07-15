const express = require('express');
const router = express.Router();
const Tesseract = require('tesseract.js');
const upload = require("../middelware/upload");
const image = require('../model/imagaedata')

router.post('/upload', upload.single('image'), async(req,res)=>{
    const { file } = req;
    if (!file) return res.status(400).send('No file uploaded.');
    const imagePath = file.path;
    
    Tesseract.recognize(imagePath,'eng').then((data)=>{
        console.log(data.data.text);
        const newImage = new image({ imagePath, text:req.body.text,result:data.data.text});
        newImage.save();
        return res.json({newImage});
    }).catch(err=>{
        return res.json({data:err});
    })
     
});

module.exports = router;