var table=function(table){
    table.string('name');
	table.string('username').primary();
	table.string('email');
	table.string('password');
	table.string('address');
	table.string('phone');
	table.date('date-created');
}

exports.up = function(knex, Promise) {
   return knex.schema.createTable('user', table)
  	.then(function(){
  		console.log('User table was created!');
  	});
};

exports.down = function(knex, Promise) {
  return knex.schema
  	.dropTable('user', table)
  	.then(function (){
  		console.log('User table was dropped!');
  	});
};
