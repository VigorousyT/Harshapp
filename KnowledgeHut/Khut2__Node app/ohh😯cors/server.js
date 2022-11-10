let http = require('http');
let cors = require('cors');
const { MongoUnexpectedServerResponseError } = require('mongodb');
let person = { name: "Harsh", email: 'Harshyadav082000@gmail.com' };
let server = http.createServer((request, response) => {
    const headers = {
        'Allow-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET'
    }
    response.writeHead(200, headers);
    response.end(JSON.stringify(person));
})
server.listen(3000, () => {
    console.log('server started')
})