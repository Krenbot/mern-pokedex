import { useState, useEffect } from 'react'
import SearchForm from "../components/searchForm"
import PokemonDetails from "../components/pokemonDetails"
import Spinner from '../components/spinner'


const Search = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [pokemon, setPokemon] = useState(null)
    const [searchTerm, setSearchTerm] = useState('snorlax')

    useEffect(() => {
        getPokemon()
    }, [])

    const getPokemon = () => {
        setLoading(true)
        setError(null)
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
            .then(response => response.json())
            .then(json => setPokemon(json))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }

    const renderUI = () => {
        if (loading) {
            return <Spinner />
        } else if (error) {
            return <p className='error'>{error}</p>
        } else if (!searchTerm) {
            return <p>Search a Pokemon to get started!!</p>
        } else if (searchTerm) {
            return <PokemonDetails pokemon={pokemon} />
        } else {
            return null
        }
    }

    return (
        <>
            {renderUI()}
            <SearchForm />
        </>
    )
}

export default Search