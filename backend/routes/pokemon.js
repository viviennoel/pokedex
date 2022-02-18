const express = require('express');
const router = express.Router();
const pokemonCtrl = require('../controllers/pokemon');
const auth = require('../middlewares/auth');

// Routes for the pokemon search

// GET ONE BY ITS NAME
router.get('/GetOneByName/:pokemonName', pokemonCtrl.GetOneByName);

// GET ALL OF THEM
router.get('/GetAll', pokemonCtrl.GetAll);

// GET THEM ACCORDING TO THEIR TYPE
router.get('/GetByType/:pokemonType', pokemonCtrl.GetByType);

module.exports = router;
