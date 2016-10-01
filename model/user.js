var knex = require('../config/Options').dbConfig,
	bookshelf = require('bookshelf')(knex),
	Permission = require('./permission');
var User = bookshelf.Model.extend({
	tableName: 'user',
	permission: function(){
		return this.belongsTo(Permission);
	}
});

module.exports = User;