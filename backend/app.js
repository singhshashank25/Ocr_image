const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const imageRoute = require('./routes/imageupload');

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const dburl = process.env.MongoURI;
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected successfully...'))
    .catch((err) => console.log('DB could not connect!\nError:',err));

app.use('/api/images', imageRoute);

app.listen(5000,()=>{
    console.log("server start at 5000");
})