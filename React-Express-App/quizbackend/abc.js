// var products = require('./products')
// const MongoClient = require('mongodb').MongoClient
// MongoClient.connect('mongo://localhost:27017', function (err, con) {
//     var db = con.db('test');
//     db.collection('products').insertMany(products)
//         .then((res) => { console.log(res) })
//         .catch(err => console.log(err))
// })

var products = require('./products')   // This Products file is from your folder
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://localhost:27017', function (err, con) {
    var db = con.db('test');        //The test is the folder where you want to create the file...
    db.collection('products').insertMany(products)  //The ('products') file is form your database...
        .then((res) => { console.log(res) })  //result will be the array of saved product.
        .catch(err => console.log(err))
})