import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query ALL_POKEMONS {
    pokemons {
      pokemonId 
      name
      height
      weight
      base_experience
      image
      moves
    }
  }
`

export const GET_TRAINERS = gql`
  query ALL_TRAINERS {
    trainers {
      _id
      username
      email
      pokemon {
        _id
        name
        image
        pokemonId
      }
    }
  }
`

export const GET_POKEMON = gql`
  query GET_POKEMON($pokemonId: Int!) {
    pokemon(pokemonId: $pokemonId) {
      _id
      pokemonId
      name
      image
      base_experience
      height
      weight
      moves
    }  
  }
`

export const GET_TRAINER = gql`
  query GET_TRAINER($_id: ID!) {
    trainer(_id: $_id) {
      _id
      username
      email
      pokemon {
        _id
        name
        image
        pokemonId
      }
    }  
  }
`