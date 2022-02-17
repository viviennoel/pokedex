const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const pokemonSchema = mongoose.Schema({
    number: { type: Number, required: true , unique:true},
    name: { type: String, required: true, unique:true },
    datenow: { type: Number, required: true },
    sprite: { type: String, required: true },
    type: { type: String, required: true },
})

// makes error handling easier (the error is clearer if not unique data is entered)
// https://www.npmjs.com/package/mongoose-unique-validator
pokemonSchema.plugin(uniqueValidator);

module.exports = mongoose.model('pokemon', pokemonSchema);