const http = require("http")

http.createServer(function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001")
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.setHeader("Access-Control-Allow-Methods", "GET")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  if (req.url === "/cors") {
    res.end("hello cors");
    return;
  }

  res.end("hello backend")
}).listen(3000)