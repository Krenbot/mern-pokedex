import { MdCatchingPokemon, MdClear } from "react-icons/md"
import Container from './container'


const SearchForm = ({ searchTerm, handleInputChange, handleFormSubmit, reset }) => {
    return (
        <form id='search-form' onSubmit={handleFormSubmit}>
            <Container>
                <input
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder='Search A Pokemon!'
                    type='text'
                />
                <button className="bg-green" type='submit'>
                    <MdCatchingPokemon size={35} />
                </button>

                {searchTerm && (
                    <button
                        onClick={reset}
                        type='button'>
                        <MdClear size={35} color='white' />
                    </button>
                )}

            </Container>
        </form >
    )
}

export default SearchForm