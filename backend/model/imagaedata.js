const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    imagePath:{type:String, required:true},
    text:{type:String,required:true},
    result:{type:String,required:true}
})

const image = mongoose.model('image',imageSchema);

module.exports = image;