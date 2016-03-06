'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PharmacySchema = new mongoose.Schema({
	file: {
		filename: String,
		name: String,
		originalname: String,
		lastModifiedDate: { type: Date, default: Date.now },
		size: Number,
		type: String
	},
	currentUser: String,
  active: Boolean
});

export default mongoose.model('Pharmacy', PharmacySchema);
