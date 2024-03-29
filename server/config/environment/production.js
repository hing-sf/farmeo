'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:     process.env.OPENSHIFT_NODEJS_IP ||
          process.env.IP ||
          'http://107.170.235.20:3000',

  // Server port
  port:   process.env.OPENSHIFT_NODEJS_PORT ||
          process.env.PORT ||
          3000,

  // MongoDB connection options
  mongo: {
    uri:  process.env.MONGOLAB_URI ||
          process.env.MONGOHQ_URL ||
          process.env.OPENSHIFT_MONGODB_DB_URL +
          process.env.OPENSHIFT_APP_NAME ||
          'mongodb://107.170.235.20:3000/test'
  }
  // Original codes
  // mongo: {
  //   uri:  process.env.MONGOLAB_URI ||
  //         process.env.MONGOHQ_URL ||
  //         process.env.OPENSHIFT_MONGODB_DB_URL +
  //         process.env.OPENSHIFT_APP_NAME ||
  //         'mongodb://localhost/pharmeo'
  // }
};
