exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, dish_name: 'Pizza'},
        {id: 2, dish_name: 'Burger'},
        {id: 3, dish_name: 'Soup'},
      ]);
    });
};