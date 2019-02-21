const knex = require('knex')

const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

module.exports = {
  getDishes: () => {
    return db('dishes')
  },

  getDish: (id) => {
      return db('dishes').where('id', id)
  },

  addDish: (dish) => {
    return db('dishes').insert(dish)
  },

  getRecipes: () => {
    return db('recipes').leftJoin('dishes', 'recipes.dish_id', 'dishes.id')
  },

  getRecipe: (id) => {
    return db('recipes')
     .select(['dishes.dish_name','recipes.recipe_name']).from('recipes').leftJoin('dishes', 'recipes.dish_id', 'dishes.id').where('recipes.id', id)
  },

  getIngredients: (id) => {
    return db('recipes')
        .select(['dishes.dish_name','recipes.recipe_name','ingredients.ingredient_name']).from('recipes').leftJoin('recipes_ingredients','recipes.id','recipes_ingredients.recipe_id').leftJoin('ingredients', 'recipes_ingredients.ingredient_id', 'ingredients.id').leftJoin('dishes', 'recipes.dish_id', 'dishes.id').where('recipes.id', id)
  },

  addRecipe: (recipe) => {
    return db('recipes').insert(recipe)
  },

}