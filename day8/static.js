var express = require('express');
var app = express();

//<script src = "/static/main.js" />
// app.use(express.static('public'));
app.use('/static', express.static('public'));

app.listen(3000);