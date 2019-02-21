
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, ingredient_name: 'Cheese'},
        {id: 2, ingredient_name: 'Pepperoni Slices'},
        {id: 3, ingredient_name: 'Tomatos'}
      ]);
    });
};
