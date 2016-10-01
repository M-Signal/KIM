var	bodyParser = require('body-parser'),
	express = require('express'),
    nunjucks=require('nunjucks'),
    express = require('express'),
	session = require('express-session'),
    mysqlStore = require('express-mysql-session')(session),
    knex=require('knex'),
    uuid = require('uuid'),
    middleware,
    NLTunnel = require('node-local-tunnel'),
    router = require('./routes'),options=require('./config/Options'),
    sessionStore = new mysqlStore(options.mySqlSession);

    var encryption=require('./utilities/encryption');
    var decryption=require('./utilities/decryption');
    middleware=function(app){
    NLTunnel.client(options.tunnel); 
        compression = require('compression');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded());
        app.use(compression());
        app.use(express.static('public'));
        app.use(session({store: sessionStore,genid: function(req){
            return uuid.v1();}, 
        resave: false,saveUninitialized: true,secret: "Secret String"}));
        router(app);
        nunjucks.configure('views',{
            autoescape: true,
            express: app
	    })

 }
 
module.exports = middleware;