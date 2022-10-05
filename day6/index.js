// let http = require ('http');

// let server = http.createServer(function(req,res){
//     res.end("helloworld")
//  })

//  server.listen(3000,function(){
//      console.log("Server Running")
//  })

const e = require('express');
let http = require ('http');

 let server = http.createServer(function(req,res){
     console.log(req.method)
     if(req.method == "GET"){
      res.end("Get Method");
     }else{
      res.end("Others");
     }
  })

 server.listen(3000,function(){
     console.log("Server Running")
  })




// const express = require('express')
// const app = express()

// // This responds with "Hello World" on the homepage
// app.get('/', function (req, res) {
//   console.log("Got a GET request for the homepage");
//   res.send('Hello GET');
// })

// // This responds a POST request for the homepage
// app.post('/', function (req, res) {
//   console.log("Got a POST request for the homepage");
//   res.send('Hello POST');
// })

// // This responds a DELETE request for the /del_user page.
// app.delete('/del_user', function (req, res) {
//   console.log("Got a DELETE request for /del_user");
//   res.send('Hello DELETE');
// })

// // This responds a GET request for the /list_user page.
// app.get('/list_user', function (req, res) {
//   console.log("Got a GET request for /list_user");
//   res.send('Page Listing');
// })

// // This responds a GET request for abcd, abxcd, ab123cd, and so on
// app.get('/ab*cd', function(req, res) {   
//   console.log("Got a GET request for /ab*cd");
//   res.send('Page Pattern Match');
// })


// app.listen(3000,function(){
//         console.log("Server Running")
//     })