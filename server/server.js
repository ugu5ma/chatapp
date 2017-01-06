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

//socket.emit from Admin text Welcome to the chat app
socket.emit('newMessage', {
  from: 'Admin',
  text: 'Welcome to the chat app',
  createdAt: new Date().getTime()
});

//socket.boradcast.emit from Admin text Welcome to the chat app
socket.broadcast.emit('newMessage', {
  from: 'Admin',
  text: 'new user joined',
  createdAt: new Date().getTime()
});




  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
    //
    // socket.broadcast.emit('newMessage' , {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });


  socket.on('disconnect', function () {
    console.log('User disconnected through socketIO');
  });

});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
