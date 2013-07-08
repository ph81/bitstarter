var express = require('express');
var app = express.createServer(express.logger());

var fs = require('fs');
var outfile = "index.html";
var buffer = new buffer (256);

app.get('/', function(request, response) {
  response.send(buffer.toString(fs.readFileSync(outfile, 'utf-8'));
 });
 

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
