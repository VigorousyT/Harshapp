const { sendFile, } = require("express")
var express = require("express");
var App = express();

App.get("/", function (req, res) {
    res.sendFile(__dirname + "/myPage.html")
})

App.listen(5000)