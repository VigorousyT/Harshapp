const http = require("http");
const qs = require("querystring");
const { loadCharacters, loadCharacterById } = require("./helper");
let url = require("url");

let server = http.createServer((request, response) => {
    let filePath = url.parse(request.url).pathname;
    if (filePath === "/characters") {
        loadCharacters()
            .then((res) => {
                response.writeHead(200, { "Content-Type": "application/json" });
                response.end(res);
            })
            .catch((err) =>
                response.writeHead(404, { "Content-Type": "text/plain" })
            );
    }
    if (filePath === "/character") {
        let str = request.url.split("?")[1];
        let query = qs.parse(str);
        let charId = query["id"];
        loadCharacterById(parseInt(charId))
            .then((res) => {
                response.writeHead(200, { "Content-Type": "application/json" });
                response.end(res);
            })
            .catch((err) =>
                response.writeHead(404, { "Content-Type": "text/plain" })
            );
    }
});

module.exports = { server };