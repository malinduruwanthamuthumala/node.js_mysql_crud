var http = require('http');
var date=require('./modules/datemodule')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(date.myDateTime())
  res.end();

}).listen(8080);