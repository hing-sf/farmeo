'use strict';

angular.module('pharmeoApp')
  .service('dataService', function () {

    this.section1 = [
      {
      image: '/assets/icons/home.icon1.svg',
      title: 'Find your company best health plan',
      message: 'We compare many factors including drug, manufactures and pharmacies to find your company the most cost-effective prescriptions.'
      },
      {
      image: '/assets/icons/home.icon2.svg',
      title: 'Switching over is fast and easy',
      message: 'We have the same plans with the lower prescription prices. Leave the hard work to us.'
      },
      {
      image: '/assets/icons/home.icon3.svg',
      title: 'Access pharmacists anytime',
      message: "On-call experts ensure you'll always have the answers you need for your prescriptions."
      },
      {
      image: '/assets/icons/home.icon4.svg',
      title: 'Free prescription delivery',
      message: 'We deliver directly to employees fast.'
      }
    ];

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

    this.orderHistorys = [
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'},
        {'date' : '12/16/15','name' : 'John','number' : '8769834','time' : '4:00pm','price' : '25.00'}
    ];

    this.prescriptions = [
        { 'name' : 'Lisinopril', 'dose' : '20mg Capsule', 'stock' : 'In stock', 'price' : '45.00'},
        { 'name' : 'Simvastatin', 'dose' : '40mg Tablet', 'stock' : 'Out of stock', 'price' : '40.00'},
        { 'name' : 'Lisinopril', 'dose' : '20mg Capsule', 'stock' : 'In stock', 'price' : '45.00'}
    ];

    this.adminProfile = [
        { 'pharmacy' : 'Target',
          'f_name' : 'Melissa',
          'l_name' : 'Parker',
          'email' : 'melparker@gmail.com',
          'phone' : '(415) 873 - 1234',
          'acctType' : 'Checking',
          'acctNo' : '829364',
          'routing' : '0947-96454',
          'street' : '123 Mission St.',
          'city' : 'San Francisco',
          'state' : 'Ca',
          'zip' : '93456'}
    ];

    this.placement = {
      options: [
        'top',
        'top-left',
        'top-right',
        'bottom',
        'bottom-left',
        'bottom-right',
        'left',
        'left-top',
        'left-bottom',
        'right',
        'right-top',
        'right-bottom'
      ],
      selected: 'top'
    };



  });
