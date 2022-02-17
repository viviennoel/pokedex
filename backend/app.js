const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const pokemonRoutes = require('./routes/pokemon.js');
const app = express();
require('dotenv').config(); // In order to use .env file

// Connect the Database. We will be using MongoDB for this project
mongoose.connect(`mongodb+srv://${process.env.NODE_ENV_DB_ID}:${process.env.NODE_ENV_DB_PASSWORD}@cluster0.g838t.mongodb.net/${process.env.NODE_ENV_DB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))

// Middleware allow access crossed origins in dev environment
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Middleware bodyParser
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

// Routes 
app.use('/api/pokemon', pokemonRoutes);

module.exports = app;