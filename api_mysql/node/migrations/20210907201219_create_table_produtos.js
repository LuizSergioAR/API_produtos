
exports.up = knex => knex.schema.createTable('produtos', table =>{

        table.increments('id')
        table.text('nome')
        table.float('preco')
    })


exports.down = knex => knex.schema.dropTable('produtos')