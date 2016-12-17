exports.up = knex => knex.schema.createTable('users', (table) => {
  table.increments('id').primary();
});

exports.down = knex => knex.schema.dropTable('users');
