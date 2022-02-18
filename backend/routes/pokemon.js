const express = require('express');
const router = express.Router();
const pokemonCtrl = require('../controllers/pokemon');
const auth = require('../middlewares/auth');

//USER GET ONE

router.get('/GetOneByName/:pokemonName', pokemonCtrl.GetOneByName);
router.get('/GetAll', pokemonCtrl.GetAll);
router.get('/GetByType/:pokemonType', pokemonCtrl.GetByType);

module.exports = router;
