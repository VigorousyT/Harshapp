var express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient
var cors = require('cors')
var bodyParser = require('body-parser');

app.get('/Books', (req, res) => {
    MongoClient.connect('mongodb://localhost:27017', function (err, con) {
        var db = con.db('khut2');
        db.Collection('Books').find().toArray()
            .then((Books) => { res.render('Books', { Book: Books }) })
            .catch(err => console.log(err))
    })
})



app.listen(5000, () => { console.log('server is running...') })