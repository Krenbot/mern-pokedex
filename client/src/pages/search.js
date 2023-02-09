import { useState, useEffect } from 'react'
import SearchForm from "../components/searchForm"
import PokemonDetails from "../components/pokemonDetails"
import Spinner from '../components/spinner'

const Search = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [pokemon, setPokemon] = useState(null)
    const [searchTerm, setSearchTerm] = useState('ninetales')

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
            return <p className="error">{error}</p>
        } else if (!searchTerm) {
            return <p>Search a pokemon to get started</p>
        } else if (pokemon) {
            return <PokemonDetails pokemon={pokemon} />
        } else {
            return null
        }
    }

    const handleInputChange = e => {
        setSearchTerm(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (!searchTerm) {
            return
        }
        getPokemon()
    }

    const reset = () => {
        setSearchTerm('')
        setError(null)
        setPokemon(null)
    }

    return (
        <>
            {renderUI()}
            <SearchForm
                searchTerm={searchTerm}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                reset={reset}
            />
        </>
    )
}

export default Search