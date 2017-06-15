'use strict';
// Requiring dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Requiring files
const secret = require('./config/secret');

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
app.use(express.static(__dirname + '/public'));

// LISTEN TO PORT
app.listen(secret.port, (err) => {
  if (err) { throw err; }
  console.log('======================');
  console.log(`Server is running on port ${secret.port}`);
  console.log('======================');
});
