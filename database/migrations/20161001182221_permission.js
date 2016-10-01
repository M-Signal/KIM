
var table = function(table){9
	table.increments('id').primary();
	table.boolean('manage_user');
	table.boolean('manage_post');
	table.string('username').notNullable().references('user.username');
};

exports.up = function(knex, Promise) {
        return knex.schema.createTable('permission', table)
		.then(function () {
			console.log('Permission table was created!');
		}); 
};

exports.down = function(knex, Promise) {
  return knex.schema
		.dropTable('permission', table)
		.then(function () {
			console.log('Permission table was dropped!');
		});  
};
