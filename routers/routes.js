const dishes = require('./dishesRouter');
const recipes = require('./recipesRouter');
const express = require('express');
const router = express.Router();

router.use('/api/dishes', dishes);
router.use('/api/recipes', recipes);

module.exports = router;