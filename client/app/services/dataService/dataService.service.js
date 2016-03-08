'use strict';

angular.module('pharmeoApp')
  .service('dataService', function () {


	this.customerOrders = [{
  	first_name: 'John',
  	last_name: 'Doe',
  	prescription: 'Rx# 716254276',
  	fillby: '3:00pm',
  	doctor: 'Dr. John Foster',
  	refillremaining: '10',
  	cost: '30.00',
  	readybydate: '1/2/16',
  	readybytime: '4:00pm'
  	},
  	{
  	first_name: 'John',
  	last_name: 'Doe',
  	prescription: 'Rx# 716254276',
  	fillby: '3:00pm',
  	doctor: 'Dr. John Foster',
  	refillremaining: '10',
  	cost: '30.00',
  	readybydate: '1/2/16',
  	readybytime: '4:00pm'
  	},
  	{
  	first_name: 'John',
  	last_name: 'Doe',
  	prescription: 'Rx# 716254276',
  	fillby: '3:00pm',
  	doctor: 'Dr. John Foster',
  	refillremaining: '10',
  	cost: '30.00',
  	readybydate: '1/2/16',
  	readybytime: '4:00pm'
  	}];


  });
