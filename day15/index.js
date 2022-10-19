var express = require('express');
var app = express();

app.get('/', function(req, res){
   var err = new Error("Something went wrong");
   next(err);
});

/*
 * other route handlers and middleware here
 * ....
 */

app.use(function(err, req, res, next) {
   res.status(500);
   res.send("Oops, something went wrong.")
});

app.listen(3000 ,() => {
   console.log("Server is running");
});