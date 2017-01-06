var socket = io();

socket.on('connect', function () {
  console.log('connected to server through socketIO');


  socket.emit('createMessage', {
    from: 'Uli',
    text: 'All right now'
  });
});

socket.on('disconnect', function () {
  console.log('disconnected from server through socketIO')
});


socket.on('newMessage', function (message) {
 console.log('newMessage', message);

});
