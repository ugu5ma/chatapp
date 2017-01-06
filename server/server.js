const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', function (socket) {
  console.log('New User connected');

  socket.emit('newMessage', {
    from: 'a.b@c.com',
    text: 'something happened',
    createdAt: 123123
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });


  socket.on('disconnect', function () {
    console.log('User disconnected through socketIO');
  });

});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
