var express = require('express'),
h = require('../handler').user,
	r = express.Router(),
	router;
	router = function(app){
	r.get('/', function(req,res){
        res.render('index.html');
    });
    r.post('/result',h.result);
    r.get('/register',function(req,res){
         res.render('register.html');
    });
    r.post('/signup',h.signup);
	app.use(r);
};
module.exports = router;