// Update with your config settings.
var path = require('path');
global.appRoot = path.resolve(__dirname);

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      port:3306,
      user:'root',
      filename: global.appRoot +'/dev.mysql',
      database:'kimapp',
      host:'localhost'
    },
    // useNullAsDefault: true,
    // debug: true
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'klasterindustri',
      host:'localhost',
      user:'root',
      password: '',
      charset: 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
       host:'localhost',
      database: 'klasterindustri',
      user:     'root',
      password: '',
      charset: 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
