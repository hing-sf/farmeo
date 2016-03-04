'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PharmacySchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Pharmacy', PharmacySchema);
