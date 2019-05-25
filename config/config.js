const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'wilayah'
    },
    port: process.env.PORT || 5000,
    db: 'mongodb://public:password1@ds213832.mlab.com:13832/indonesian-administrative'
  },

  test: {
    root: rootPath,
    app: {
      name: 'wilayah'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/wilayah-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'wilayah'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://public:password1@ds213832.mlab.com:13832/indonesian-administrative'
  }
};

module.exports = config[env];
