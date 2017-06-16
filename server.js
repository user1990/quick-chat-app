'use strict';
const express = require('express');
const http = require('http');
const port = process.env.PORT || 3000;
const socketIO = require('socket.io');
// const { generateMessage, generateLocationMessage } = require('./utils/message');
// const { isRealString } = require('./utils/validation');
// const { Users } = require('./utils/users');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
  console.log('New User Connected');

  socket.emit('newMessage', {
    from: 'test@gmail.com',
    text: 'test',
    createdAt: 1990
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessasge', newMessage);
  });

  socket.on('disconnect', function() {
    console.log('User was disconnected');
  });
});

server.listen(port, (err) => {
  if (err) { throw err; }
  console.log('======================');
  console.log(`Server is running on port ${port}`);
  console.log('======================');
});
