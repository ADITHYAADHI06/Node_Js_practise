const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Home page");
  } else if (req.url == "/about") {
    res.end("About page");
  } else if (req.url == "/contact") {
    res.end("Contact page");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 Error page");
  }
});

server.listen(8001, "127.0.0.1", () => {
  console.log("listening");
});
