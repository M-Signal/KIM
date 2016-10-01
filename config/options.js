var conv=require('../utilities/convert');
var tunnel = {
      remoteHost : 'http://192.168.43.197:3000',
      localBase : 'http://localhost:3000'
    };
var knex = require('../database/knexfile');
var dbConfig= require('knex')(knex.development);

var mySqlSession={
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'kimapp',
	checkExpirationInterval:conv.toSecond(3),// How frequently expired sessions will be cleared; milliseconds. 
    expiration: conv.toSecond(3),// The maximum age of a valid session; milliseconds. 
    createDatabaseTable: true,// Whether or not to create the sessions database table, if one does not already exist. 
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
    
}
var Options={
    tunnel:tunnel,
    mySqlSession:mySqlSession,
    dbConfig:dbConfig
}
module.exports = Options;