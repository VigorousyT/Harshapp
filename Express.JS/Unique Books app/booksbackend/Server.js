var express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient
var cors = require('cors')
var bodyParser = require('body-parser')

app.get('/', (req, res) => {
    res.send("please wait...")
})

app.listen(5000, () => { console.log('server is running...') })