/*
    Example with http native module on NodeJS and how to response with a file.
*/

'use strict';
const http = require('http');
const fs = require('fs');
const port = 8888;

//404 response.
function send404Response(res) {
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.write("Error 404: Page not found");
  res.end();
}

//Handle user request.
function onRequest(req, res){
  if (req.method == 'GET' && req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream("./index.html").pipe(res);

  }else {
    send404Response(res);
  }
}



http.createServer(onRequest).listen(port);
console.log("Server is running...");
