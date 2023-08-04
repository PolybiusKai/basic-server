// to run this script type 'node server.js' in the terminal. 

const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url)
  res.end('Hello World');
})

server.listen(5500);

console.log('Server running at http://127.0.0.1:5500/');