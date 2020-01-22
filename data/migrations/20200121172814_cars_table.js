
exports.up = function(knex) {
  return knex.schema.createTable('car', tbl => {
    //unique id that increments automatically
    tbl.increments();

    //VIN=> string, unique, max length 26, required
    tbl.string('VIN', 26).unique().notNullable();

    //Make => string, not unique, max length 50, indexed, required
    tbl.string('make', 50).index().notNullable();

    //Model => string, not unique, max length 50, indexed, required
    tbl.string('model', 50).index().notNullable();

    //Mileage => integer, not unique, max length 10, required
    tbl.integer('mileage', 10).notNullable();

    //Tranmission Type => string, not unique, max length 50, optional
    tbl.string('transmission', 50).index();

    //Status of Title => string, not unique, max length 100, optional
    tbl.string('status', 100).index();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car');
};
