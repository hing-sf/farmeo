'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PharmacySchema = new mongoose.Schema({
	// file: {
	// 	filename: String,
	// 	name: String,
	// 	originalname: String,
	// 	lastModifiedDate: { type: Date, default: Date.now },
	// 	size: Number,
	// 	type: String
	// },
	address1: String,
	address2: String,
	bankAcctNo: String,
	bankAcctRoute: String,
	city: String,
	email: String,
	name: String,
	phone: String,
	state: String,
	zip: String,
	// currentUser: String,
  active: Boolean
});

export default mongoose.model('Pharmacy', PharmacySchema);
