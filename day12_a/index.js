import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import multer from 'multer';
import post_route from './routes/post_route.js'
import cookieParser from 'cookie-parser'

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array())

app.get("/", (_req, res) => {
  res.json({ message: "Hello" });
})

mongoose
  .connect(process.env.DATABASE || "")
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    app.use("/api/posts", post_route);
  })

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', function(req, res){
  res.cookie('name', 'express').send('cookie set'); //Sets name = express
});

app.get('/clear_cookie_foo', function(req, res){
  res.clearCookie('foo');
  res.send('cookie foo cleared');
});

var session = require('express-session');
app.use(session({secret: "Shh, its a secret!"}));