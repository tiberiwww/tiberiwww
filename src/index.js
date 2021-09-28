var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World! dada");
    res.end();
  })
  .listen(8080);
