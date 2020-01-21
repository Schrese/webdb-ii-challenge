
exports.up = function(knex) {
  return knex,schema.createTable('car', tbl => {
    //unique id that increments automatically
    tbl.increments();
    //VIN=> string, unique, max length 26, required

    //Make => string, not unique, max length 50, indexed, required

    //Model => string, not unique, max length 50, indexed, required

    //Mileage => integer, not unique, max length 10, required

    //Tranmission Type => string, not unique, max length 50, optional
    
    //Status of Title => string, not unique, max length 100, optional

  })
};

exports.down = function(knex) {
  
};
