const http = require("http")
const fs = require("fs")

http.createServer(function(req, res) {
  if (req.url === "/") {
    fs.readFile(__dirname + "/index.html", function (err, files) {
      if (err) throw err

      res.setHeader("Content-Type", "text/html")
      res.end(files)
    })
    return
  }

  res.end("hello frontend")
}).listen(3001)