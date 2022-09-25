var express = require("express");
var App = express();
var Products = require('./Products')
App.set('view element', 'pug');
App.set('views', './views');

App.get("/", function (req, res) {
    res.sendFile(__dirname + "/myPage.html")
})

App.get("/Products", function (req, res) {
    res.render('ProductsHome.pug', { prod: Products });
})

App.listen(5000)