const express = require('express');
const router = express.Router();
const pokemonCtrl = require('../controllers/pokemon');
const auth = require('../middlewares/auth');

//USER GET ONE

router.get('/userGet/:userId', pokemonCtrl.pokemonGetOne)

module.exports = router;
