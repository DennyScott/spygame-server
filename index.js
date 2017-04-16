//in node.js
var app = require('express')();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var io = require('socket.io');
var server = require('http').createServer(app);
var allowedOrigins = "http://localhost:3000";
var path ='/stamp'; // you need this if you want to connect to something other than the default socket.io path

var sio_server = io(server, {
    origins: allowedOrigins,
    path : path
});

sio_server.on('connection', () => {
  console.log('connected');
})
server.listen(8080, err => {
  if (err){
    console.log(err)
  } else {
    console.log(
      'success'
    )
  }
});
console.log("Listening");
