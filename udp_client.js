const dgram = require('dgram');
const message = new Buffer('Node.js');
const client = dgram.createSocket('udp4');
client.send(message, 0, message.length, 41234,
    'localhost', function(err, bytes) {
      client.close();
    });
