const net = require('net');
const server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    socket.write('Hello !');
  });
  socket.on('end', function() {
    console.log('log out');
  });
  socket.write('welcome to my intro');
});
server.listen(8124, function() {
  console.log('server bound ');
});
