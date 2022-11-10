var express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId
var cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/Books', (req, res) => {
    MongoClient.connect('mongodb://localhost:27017', function (err, con) {
        var db = con.db('Khut2');
        db.collection('Books').find().toArray()
            .then((Books) => {
                console.log(Books)
                res.send(Books)
            })
            .catch(err => console.log(err))
    })
})

app.get('/deleteBooks/:id', (req, res) => {
    MongoClient.connect('mongodb://localhost:27017', function (err, con) {
        var db = con.db('Khut2');
        db.collection('Books').deleteOne({ _id: ObjectId(req.params.id) })
            .then((Books) => {
                res.send({ message: "deleted" })
            })
            .catch(err => console.log(err))
    })
})

app.post('/addBook', (req, res) => {
    console.log("req.body", req.body)
    MongoClient.connect('mongodb://localhost:27017', function (err, con) {
        var db = con.db('Khut2');
        db.collection('Books').insertOne(req.body)
            .then((Books) => {
                console.log(Books)
                res.send({ message: 'added' })
                //res.redirect("/Books")
            })
            .catch(err => console.log(err))
    })
})

app.get('/editBook/:id', (req, res) => {
    MongoClient.connect('mongodb://localhost:27017', function (err, con) {
        var db = con.db('Khut2');
        db.collection('Books').findOne({ _id: ObjectId(req.params.id) })
            .then((Books) => {
                console.log(Books)
                res.render('editBook', { Books: Books })
            })
            .catch(err => console.log(err))
    })
})

app.listen(5000, () => { console.log('server is running...') })