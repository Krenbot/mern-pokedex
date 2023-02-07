//allows fetching from pokemon API server
const fetch = require('node-fetch')
const connection = require('../config/connection')
const { Trainer, Pokemon } = require('../models')

connection.once('open', async () => {
    //delete existing data
    await Trainer.deleteMany()
    await Pokemon.deleteMany()

    //seed pokemon
    for (const id of [1, 2, 3]) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const { id: pokemonId,
            name,
            moves,
            height,
            weight,
            base_experience,
            sprites
        } = await response.json()

        await Pokemon.create({
            pokemonId,
            name,
            height,
            weight,
            base_experience,
            //brakets are necessary to escape the - in the API call
            image: sprites.other['official-artwork'].front_default,
            //returns array of strings from inital array
            moves: moves.map(moveData => moveData.move.name)
        })
    }
    //seed trainer
    const allPokemon = await Pokemon.find()
    const allPokemonIds = allPokemon.map(pokemon => pokemon._id)

    //create Trainer
    await Trainer.create({
        username: 'Ash Ketchum',
        email: "ash@gmail.com",
        password: 'masterball',
        pokemon: allPokemonIds
    })

    console.log('Gotta catch \'em all! - TRAINERS & POKEMON seeded!')
    process.exit(0)
})