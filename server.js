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

io.on('connection', (socket) => {
  console.log('New User Connected');
});
server.listen(port, (err) => {
  if (err) { throw err; }
  console.log('======================');
  console.log(`Server is running on port ${port}`);
  console.log('======================');
});
