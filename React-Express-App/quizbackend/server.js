var express = require('express');
const MongoClient = require('mongodb').MongoClient
var cors = require('cors')
var app = express();
app.use(cors())

app.get("/questions", function (req, res) {
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err) throw err

        const db = client.db('test')
        db.collection('questions').find().toArray((err, result) => {
            if (err) throw err
            res.send(result)
        })
    })
})

app.listen(4500, () => { console.log("server is running on 4500") })