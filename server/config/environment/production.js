'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  // ip:     process.env.OPENSHIFT_NODEJS_IP ||
  //         process.env.IP ||
  //         undefined,

  // Server port
  // port:   process.env.OPENSHIFT_NODEJS_PORT ||
  //         process.env.PORT ||
  //         8080,


  // Server IP
  ip:     process.env.OPENSHIFT_NODEJS_IP ||
          process.env.IP ||
          'http://104.131.138.143/',

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
          'mongodb://localhost/pharmeo'
  }
};
