
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, recipe_name: 'Pepperoni', dish_id: 1},
        {id: 2, recipe_name: 'Cheese', dish_id: 2},
        {id: 3, recipe_name: 'Tomato', dish_id: 3}
      ]);
    });
};
