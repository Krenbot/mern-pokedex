const typeDefs = `
type Pokemon {
    _id: ID
    pokemonId: Int
    name: String
    height: Int
    weight: Int
    base_experience: Int
    image: String
    moves: [String]
}

type Trainer {
    _id: ID
    username: String
    email: String
    pokemon: [Pokemon]
}

type Query {
    pokemons: [Pokemon]
    pokemon(pokemonId: Int!): Pokemon

    trainers: [Trainer]
    trainer(_id: ID!): Trainer
}

type Mutation {
    addPokemon(
        _id: ID
        pokemonId: Int
        name: String
        height: Int
        weight: Int
        base_experience: Int
        image: String
        moves: [String]
    ): Pokemon

    addTrainer(
        username: String!
        email: String!
        passsword: String!
    ): Trainer
}
`

module.exports = typeDefs