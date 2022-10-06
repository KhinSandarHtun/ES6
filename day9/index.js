const express = require('express');
const app = express();
const router = require ('./router')

const { engine } = require('express-edge');
 
// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
app.set('views', `${__dirname}/page`);

app.use('/',router)

app.listen(3000, () => {console.log("server running on port 3000")});