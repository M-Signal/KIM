var klaster = require('./klaster'),
	user = require('./user');

var router = function(app){
	klaster(app);
	user(app);
};

module.exports = router;