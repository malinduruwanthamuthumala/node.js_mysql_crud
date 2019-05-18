var http = require('http');
var date=require('./modules/datemodule')

http.createServer(function (req, res) {
  res.writeHead(200,{'Content-Type': 'text/html'});
  res.write(date.myDateTime());
  res.write(req.url);
  res.end();

}).listen(8080);