var socket = io();

socket.on('connect', function () {
  console.log('connected to server through socketIO');


  // socket.emit('createMessage', {
  //   from: 'Uli',
  //   text: 'All right now'
  // });
});

socket.on('disconnect', function () {
  console.log('disconnected from server through socketIO')
});


socket.on('newMessage', function (message) {
 console.log('newMessage', message);
 var li = jQuery('<li></li>');
 li.text(`${message.from}: ${message.text}`)

 jQuery('#messages').append(li);
});


// socket.emit('createMessage', {
//   from: 'Uli',
//   text: 'All right now'
// }, function (data) {
//   console.log('here we go', data);
// });

 jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();
  socket.emit('createMessage', {
   from: 'User',
   text: jQuery('[name=message]').val()
  }, function () {

  });
});
