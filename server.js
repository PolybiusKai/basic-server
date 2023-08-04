// to run this script type 'node server.js' in the terminal.

const http = require("http");
const PORT = 5000
const server = http.createServer((req, res) => {
  if (req.url === "/about") res.end("About Me");
  else if (req.url === "/contact") res.end("Contact Me");
  else if (req.url === "/") res.end("Home");
  else {
    res.writeHead(404);
    res.end("Sorry, page not found");
  }
});

server.listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
