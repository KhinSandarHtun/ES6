var express = require('express');
var router = express.Router();

router.get('/',(req,res) => {
    // <!--console.log('Home page')-->
    res.render('home',{islike : true})});

router.get('/about',(req,res) => {
    // <!--console.log('Home page')-->
    res.render('about')
});

module.exports = router;