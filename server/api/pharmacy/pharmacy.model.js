'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PharmacySchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  currentUser: String,
  active: Boolean
});

export default mongoose.model('Pharmacy', PharmacySchema);
