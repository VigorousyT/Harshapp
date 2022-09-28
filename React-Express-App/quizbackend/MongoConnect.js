const { MongoClient } = require('Mongodb');
const connectionString = "mongodb://localhost:27017";
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTOpology: true,
});
let dbConnection;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (err || !db) {
                return callback(err);
            }

            dbConnection = db.db("test");    // In palce of test I have given the name of my database management system...// only test should be changed if you r using any other database...
            console.log("Successfully connected to MongoDB.");

            return callback();
        });
    },

    getDb: function () {
        return dbConnection;
    },
};