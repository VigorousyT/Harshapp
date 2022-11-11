const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

const mimeTypes = { css: "text/css", html: "text/html", js: "text/javascript" };

function getMimeType(extName) {
    let mimeType = mimeTypes.html;
    switch (extName) {
        case ".css":
            mimeType = mimeTypes.css;
            break;
        case ".js":
            mimeType = mimeTypes.js;
            break;
    }
    return mimeType;
}

function readContent(filePath, response, contentType) {
    fs.readFile(filePath, (err, data) => {
        if (err) return console.log(err);
        response.writeHead(200, { "Content-Type": contentType });
        response.end(data);
    });
}

let server = http.createServer((request, response) => {
    let filePath = url.parse(request.url).pathname;
    let extName = path.extname(filePath);
    let mimeType = getMimeType(extName);
    if (filePath == "/") {
        readContent("home.html", response, mimeType);
    } else if (filePath == "/about") {
        readContent("about.html", response, mimeType);
    } else if (filePath == "/contact") {
        readContent("contact.html", response, mimeType);
    } else if ((filePath == "/details") & (request.method == "POST")) {
        let body = "";
        request.on("data", (load) => {
            body += load;
        });
        request.on("end", () => {
            response.write(body);
            response.end();
        });
    } else {
        filePath = filePath.substr(1);
        readContent(filePath, response, mimeType);
    }
});

module.exports = { server };