'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PharmacyFileSchema = new mongoose.Schema({
	file: {
		filename: String,
		name: String,
		originalname: String,
		lastModifiedDate: { type: Date, default: Date.now },
		size: Number,
		type: String
	},
  active: Boolean
});

export default mongoose.model('PharmacyFile', PharmacyFileSchema);
