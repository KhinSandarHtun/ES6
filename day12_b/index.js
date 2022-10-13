// Importing express module
const express = require("express")
  
// Importing express-session module
const session = require("express-session")
  
// Importing file-store module
const filestore = require("session-file-store")(session)
  
const path = require("path")
  
// Setting up the server
var app = express()
  
// Creating session 
app.use(session({
    name: "session-id",
    secret: "GFGEnter", // Secret key,
    saveUninitialized: false,
    resave: false,
    store: new filestore()
}))
  
// Asking for the authorization
function auth(req, res, next) {
    // Checking for the session
    console.log(req.session)
  
    // Checking for the authorization
    if (!req.session.user) {
        var authHeader = req.headers.authorization;
        console.log(authHeader);
        var err = new Error("You are not authenticated")
        res.setHeader("WWW-Authenticate", "Basic")
        err.status = 401
        next(err)
  
        var auth = new Buffer.from(authHeader.split(' ')[1],
            "base64").toString().split(":")
  
        // Reading username and password
        var username = auth[0]
        var password = auth[1]
        if (username == "admin2" && password == "password") {
            req.session.user = "admin2"
            next()
        }
        else {
            // Retry incase of incorrect credentials
            var err = new Error('You are not authenticated!');
            res.setHeader("WWW-Authenticate", "Basic")
            err.status = 401;
            return next(err);
        }
    }
    else {
        if (req.session.user === "admin2") {
            next()
        }
        else {
            var err = new Error('You are not authenticated!');
            res.setHeader("WWW-Authenticate", "Basic")
            err.status = 401;
            return next(err);
        }
    }
}
  
// Middlewares
app.use(auth)
app.use(express.static(path.join(__dirname, 'public')));
  
// Server setup
app.listen(3000, () => {
    console.log("Server is Starting")
})