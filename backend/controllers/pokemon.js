const Pokemon = require('../models/pokemon');

// GET ALL THE POKEMONS
exports.GetAll = (req, res) => {
    Pokemon.find({})
        .then((pokemon) => {
            if (!pokemon) {
                return res.status(405).json({ message: 'no order saved' });
            } else {
                res.status(200).json(pokemon);
            }
        })
        .catch(() => {
                res.status(500).send(new Error('Database error!'));
            }
        )
};

// GET ONE POKEMON BY ITS NAME
exports.GetOneByName = (req, res) => {
    // The input parameter need to be encoded - Verification that the string is lowercase
    var pokemonName = encodeURIComponent(req.params.pokemonName.toLowerCase());

    // Find the pokemon by its name - the name is unique in our DB
    Pokemon.find({ name: pokemonName })
        .then((pokemon) => {
            if (!pokemon) {
                return res.status(405).json({ message: 'no order saved' });
            } else {
                res.status(200).json(pokemon);
            }
        })
        .catch(() => {
                res.status(500).send(new Error('Database error!'));
            }
        )
};

// GET THE POKEMON BY COLLECTION
exports.GetByType = (req, res) => {
    var pokemonType = encodeURIComponent(req.params.pokemonType.toLowerCase());
    console.log('pokemonCollection', pokemonType)

    Pokemon.find(
        { type: {
            $in: pokemonType
        }})
        .then((pokemon) => {
            console.log(pokemon)
            if (!pokemon) {
                return res.status(405).json({ message: 'no order saved' });
            } else {
                res.status(200).json(pokemon);
            }
        })
        .catch(() => {
                res.status(500).send(new Error('Database error!'));
            }
        )
}
