'use strict';
const connect = require('connect');
const http = require('http');

let app = connect();

function doFirst(req, res, next){
  console.log("Test1");
  next();
}

function doSecond(req, res, next){
  console.log("Test2");
  // next();
}

app.use(doFirst);
app.use(doSecond);


http.createServer(app).listen(8888);
console.log('Server is running...');
