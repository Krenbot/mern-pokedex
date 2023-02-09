import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      trainer {
        _id
        email
        username
      }
    }
  }
`

export const ADD_TRAINER = gql`
  mutation ADD_TRAINER($username: String!, $email: String!, $password: String!) {
    addTrainer(username: $username, email: $email, password: $password) {
      token
      trainer {
        _id
        email
        username
      }
    }
  }
`

export const ADD_POKEMON = gql`
  mutation ADD_POKEMON(
    $pokemonId: Int!, 
    $name: String!, 
    $height: Int, 
    $weight: Int, 
    $base_experience: Int, 
    $image: String, 
    $moves: [String]
    $trainerId: ID!
  ) {
    addPokemon(
      pokemonId: $pokemonId 
      name: $name,
      height: $height,
      weight: $weight,
      base_experience: $base_experience,
      image: $image,
      moves: $moves,
      trainerId: $trainerId
    ) {
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