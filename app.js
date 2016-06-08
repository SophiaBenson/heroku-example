var http= require('http');
var express= require('express');
var app = express();
var server = app.listen(process.env.PORT || 3000, function () {
  console.log("listening on port 3000");

});

app.get('/', function (req, res) {
  console.log("Bird Activated");
  res.writeHead(200);
  res.write("Bird chirps Hello");
  res.end();
});
//10.100.100.40
