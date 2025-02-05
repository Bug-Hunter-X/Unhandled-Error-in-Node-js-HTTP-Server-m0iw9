const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server running at http://localhost:8080/');
//The above code will create a simple HTTP server and print a message to the console.However,if there is an error in the code,it will not be handled properly and the server will crash.This is a common issue that can lead to unexpected server downtime.

//A better way to handle errors is to use the 'error' event listener.This will allow the server to continue running even if there is an error.

const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.on('error', (err) => {
  console.error(err);
});

server.listen(8080);
console.log('Server running at http://localhost:8080/');