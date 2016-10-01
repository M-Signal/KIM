var User = require('../model/user'),
crypto=require('../utilities/encryption'),
decrypto=require('../utilities/decryption'),
r_pass_base64=require('../utilities/r_pass_base64'),
handler;


var result=function(req,res){
	var username = req.body.username;
    var pass=req.body.password ;
	var realPass;
	var base64;

    User.where('username',username).fetch().then(function(user){
		var password=user.get('password');
		base64=user.get('base64');
		realPass = decrypto(password,base64);
		if (pass===realPass){
			res.send('asa');		
		}else{
			res.sendStatus(401);
		};
	}).catch(function(err){
		console.log(err);
		res.sendStatus(401);
	}); 
};


var signup=function(req,res){
	var base64=r_pass_base64;
	var password=crypto(req.body.password,base64);
	new User({
	'name':req.body.name,
	'username':req.body.username,
	'email':req.body.email,'password':password,
	'address':req.body.address,
	'phone':req.body.phone,
	'date-created':req.body.date,
	'base64':base64})
	.save()
    .then(function(user){
		new Permission({
			'manage_user': true,
			'manage_post': true,
			'username': user.get('username')
		}).save()
		.then(function(permission){
			res.sendStatus(201);
		})
	})
    
    .catch(function(err){
		console.log(err);
	});	
};

handler = {
	result: result,
    signup:signup
};

module.exports = handler;