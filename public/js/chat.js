var socket = io();

socket.on('connect', function() {
  console.log('New user connected');

  socket.emit('createMessage', {
    to: 'address',
    text: 'message'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('New message', message);
});
