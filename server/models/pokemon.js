const { Schema, model } = require('mongoose')

const pokemonSchema = new Schema({
    pokemonId: Number,
    name: {
        type: String,
        required: "NAME is required!",
        trim: "true"
    },
    height: Number,
    weight: Number,
    base_experience: Number,
    image: String,
    moves: [String],
})

const Pokemon = model('Pokemon', pokemonSchema)

module.exports = Pokemon