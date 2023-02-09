import { MdSave } from 'react-icons/md'
import { useMutation } from '@apollo/client'
import { ADD_POKEMON } from '../utils/mutations'
import { GET_TRAINER } from '../utils/queries'
import Container from './container'
import Auth from '../utils/auth'

const PokemonDetails = (props) => {

    const {
        id,
        name,
        base_experience,
        height,
        weight,
        moves,
        sprites,
    } = props.pokemon

    const currentUser = Auth.getLoggedInUser()

    const [addPokemon] = useMutation(ADD_POKEMON, {
        refetchQueries: [
            { query: GET_TRAINER },
            'GET_TRAINER'
        ],
    })

    const savePokemon = async () => {
        await addPokemon({
            variables: {
                trainerId: currentUser._id,
                pokemonId: id,
                name,
                base_experience,
                height,
                weight,
                image: sprites.other['official-artwork'].front_default,
                moves: moves.map(moveData => moveData.move.name)
            }
        })
        alert(`${name} saved!`)
    }

    return (
        <Container className="results">
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <h3>ID: {id}</h3>
                {Auth.loggedIn() && (
                    <button onClick={savePokemon}>
                        <MdSave size={25} />
                    </button>
                )}
            </div>
            <img
                src={sprites.other['official-artwork'].front_default}
                alt={name}
                height="auto"
                width="100%"
            />
            <h1>{name}</h1>
            <ul>
                <li>Base Experience: {base_experience}</li>
                <li>Height: {height}</li>
                <li>Weight: {weight}</li>
            </ul>
            <h2>Moves</h2>
            {moves.map(moveData => {
                return (
                    <li key={moveData.move.name}>
                        {moveData.move.name}
                    </li>
                )
            })}
        </Container>
    )
}

export default PokemonDetails