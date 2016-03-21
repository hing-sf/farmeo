'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PartnerRequestSchema = new mongoose.Schema({
  company: String,
  email: String,
  phone: String,
  active: Boolean
});

export default mongoose.model('PartnerRequest', PartnerRequestSchema);
