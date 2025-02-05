const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.on('error', (err) => {
  console.error(err);
  // More robust error handling could be added here, such as attempting to restart the server on a different port.
});

server.listen(8080);
console.log('Server running at http://localhost:8080/');