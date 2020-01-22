
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car').insert([
        { id: 1, VIN: '13HE45', make: 'Dominus', model: 'Flat', mileage: 1328 , transmission: 'V8', status: 'junker'  },
        { id: 2, VIN: '16HPZ89', make: 'Octane', model: 'Curved', mileage: 12000 , transmission: 'Motormouth', status: 'Used'  },
        { id: 3, VIN: 'BAT0966', make: 'Batmobile', model: 'Flat', mileage: 2001 , transmission: 'Magic', status: 'always pristine'  },
        { id: 4, VIN: 'POTU569', make: 'Delorian', model: 'Flat', mileage: 666, transmission: 'Infinity', status: 'always exists'  }

      ]);
    });
};
