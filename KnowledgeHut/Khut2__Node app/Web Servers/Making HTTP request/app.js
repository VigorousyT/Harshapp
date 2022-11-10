const http = require("http");
const { contact, errorMessage } = require("./templates");

let server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("This message is returned from a plain text file");
    } else if (request.url === "/contact") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(contact);
    } else {
        response.end(errorMessage);
    }
})

module.exports = { server };
