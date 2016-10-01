var express = require('express'),
	r = express.Router(),
	router;
    
router = function(app){
    app.get('/klaster',function(req){
        console.log('klaster');
    });

    
	app.use(r);
};


module.exports = router;