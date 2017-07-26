'use strict';
const connect = require('connect');
const http = require('http');

let app = connect();

app.use('/profile', () => {
  console.log('User requested profile page.');
});
app.use('/forum', () => {
  console.log('User requested forum page.');
});


http.createServer(app).listen(8888);
console.log('Server is running...');
