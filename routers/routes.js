const dishes = require('./dishesRouter');
const recipes = require('./recipesRouter');
const express = require('express');
const router = express.Router();

router.use('/', dishes);
router.use('/', recipes);

module.exports = router;