const multer = require('multer');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const { v4 } = require('uuid');
const image_route = require('./routes/image_route')
dotenv.config();

const fileStorage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, 'images')
    },
    filename: (_req, file, cb) => {
        cb(null,`${v4()}_${file.originalname}`);
    },
})

const fileFilter = (_req, file, cb) => {
    if(
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg" 
    ){
        cb(null, true);
    } else{
        cb(null, false);
    }
}

const app = express();
app.use(express.json())
app.use(multer({storage: fileStorage, fileFilter }).single("profileImage"))
app.use('/images', express.static("images"));

mongoose
    .connect(process.env.DB)
    .then(() => {
        app.listen(5000, () => {console.log('Sever is running on port 5000')})
        app.use("/image", image_route)
    })