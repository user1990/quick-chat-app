'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const secret = require('./config/secret');

// const { generateMessage, generateLocationMessage } = require('./utils/message');
// const { isRealString } = require('./utils/validation');
// const { Users } = require('./utils/users');

var publicPath = path.join(__dirname, '../public');
var app = express();

// ==========
// APP CONFIG
// ==========
mongoose.Promise = global.Promise;
mongoose.connect(secret.database, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('======================');
    console.log('Connected to the database');
    console.log('======================');
  }
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicPath));

// LISTEN TO PORT
app.listen(secret.port, (err) => {
  if (err) { throw err; }
  console.log('======================');
  console.log(`Server is running on port ${secret.port}`);
  console.log('======================');
});
