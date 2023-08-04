// to run this script type 'node server.js' in the terminal.

const http = require("http");
const fs = require("fs");

const PORT = 5000;
const homePage = fs.readFileSync("index.html");
const aboutPage = fs.readFileSync("about.html");
const contactPage = fs.readFileSync("contact.html");
const notfoundPage = fs.readFileSync("404.html");

const server = http.createServer((req, res) => {
  if (req.url === "/about") res.end(aboutPage);
  else if (req.url === "/contact") res.end(contactPage);
  else if (req.url === "/") res.end(homePage);
  else {
    res.writeHead(404);
    res.end(notfoundPage);
  }
});

server.listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
