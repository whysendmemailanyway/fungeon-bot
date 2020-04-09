const item_flags = [
    'is_flammable',
    'is_explosive',
    'is_flexible',
    'is_container',
    'is_two_handed',
    'is_weapon',
    'is_light',
    'is_medium',
    'is_heavy',
    'is_ranged',
    'is_armor',
    'is_shield'
];

exports.up = function(knex) {
    return knex.schema
        .createTable('items', function (table) {
            table.increments('id');
            table.string('full_name', 255).notNullable().defaultTo('');
            table.string('description', 255).notNullable().defaultTo('');
            table.float('gp_value').notNullable().defaultTo(0);
            table.integer('ml_volume').nullable();
            table.integer('meters_range').nullable();
            table.integer('damage_dice_num').nullable();
            table.integer('damage_dice_faces').nullable();
            table.integer('armor_bonus').nullable();
            item_flags.forEach(flag => table.boolean(flag).notNullable().defaultTo(false));
        })
};

exports.down = function(knex) {
    return knex.schema
      .dropTable('items');
};
