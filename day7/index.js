var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var multer = requier('multer');
var upload = multer();

require('dotenv').config()

app.use(express.json());

app.use(express.urlencoded({ extended : true }));

app.use(upload.array());
app.use(express.static('public'));


var test = require('./controller/test')

// app.get('/hello', function(req, res){
//    res.send("Hello World!");
// });
app.use('/test',test)
app.listen(process.env,PORT, () =>{console.log('Server Running')});