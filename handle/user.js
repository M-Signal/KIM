var User = require('../model/user'),
handler;

var result=function(req,res){
	var username = req.body.username;
    var pass = req.body.password;
	var realPass;

    User.where('username',username).fetch().then(function(user){
		realPass = user.get('password');
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


var signup=function(req,res){new User({'name':req.body.name,
	'username':req.body.username,
	'email':req.body.email,'password':req.body.password,
	'address':req.body.address,
	'phone':req.body.phone,
	'date-created':req.body.date})
	.save()
    // .then(function(user){
	// 	new Permission({
	// 		'manage_user': true,
	// 		'manage_post': true,
	// 		'username': user.get('username')
	// 	}).save()
	// 	.then(function(permission){
	// 		res.sendStatus(201);
	// 	})
	// })
    
    .catch(function(err){
		console.log(err);
	});	
};

handler = {
	result: result,
    signup:signup
};

module.exports = handler;