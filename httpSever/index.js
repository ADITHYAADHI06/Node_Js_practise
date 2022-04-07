const http = require("http");

const httpServer = http.createServer((req, res) => {
  res.end("hello from other side");
});

httpServer.listen(8000, "127.0.0.1", () => {
  console.log("listening");
});
