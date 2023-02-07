const { Pokemon, Trainer } = require('../models')

const resolvers = {
    Query: {
        pokemons: async (parent, args, context, info) => {
            return await Pokemon.find()
        },
        pokemon: async (parent, args, context, info) => {
            return await Pokemon.findOne({ pokemonId: args.pokemonId })
        },
        trainers: async (parent, args, context, info) => {
            return await Trainer.find()
        },
        trainer: async (parent, args, context, info) => {
            return await Trainer.findById(args._id)
        },
    },
    Mutation: {
        addPokemon: async (parent, args, context, info) => {
            const pokemon = await Pokemon.create(args)
            if (args.trainerId) {
                await Trainer.findByIdAndUpdate(args.trainerId, {
                    $addToSet: {
                        pokemon: pokemon._id
                    }
                })
            }
            return pokemon
        },
        addTrainer: async (parent, args, context, info) => {
            return await Trainer.create(args)
        },
    }
}

module.exports = resolvers