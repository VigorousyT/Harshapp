// Now we are going to create/Render a New_server. using the terminal for that see what I have done... (YOUR BASICS MUST HAVE BEEN CLEARD OTHERWISE YOU CAN'T UNDERSTAND)

// Server means that it can send the request and it can also accept's the request.  

//------------------------SO, LET'S START BY CREATING ONE---------------------------------//


const { readFile, readFileSync } = require('fs');
var http = require('http');
http.createServer(function (req, res) {
    var filename = req.url.split('/')[1];
    if (filename !== 'favicon.ico') {
        // console.log(filename)
        var data = readFileSync(filename);
        // console.log(data)
        res.write(data.toString())
        // res.end("Please Wait... While the server Loads...")
    }
}).listen(4000)


// so now we have a server, and from now we are going to get all the request, response in the fuction that we have created in line no.8. after taking the data from here it will create a server which can recieve and get the data for us.

// Whenever the request comes from the browser that request coms in the url only.

//So, whenever you change the server then you have to restart the server Again...

// Always it was not possible that you can render the data like you are rendering in this way. By using the node CreateServer.js type and randomly going to the server...

// There is another Way! also. the way is the tool Nodemon---- This will help you to restart the server when it is available...

