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
        console.log(response)
    }

    //seed trainer

    console.log('Gotta catch \'em all! - TRAINERS & POKEMON seeded!')
    process.exit(0)

})