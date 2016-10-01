var knex = require('../config/Options').dbConfig,
	bookshelf = require('bookshelf')(knex);
var User = bookshelf.Model.extend({
	tableName: 'user',
	
});

module.exports = User;