import { MdSave } from 'react-icons/md'
import Container from './container'
import Auth from '../utils/auth'


const PokemonDetails = (props) => {

    const {
        id,
        name,
        moves,
        base_experience,
        height,
        weight,
        sprites
    } = props.pokemon


    return (
        <Container className='results'>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <h3>ID: {id}</h3>
            </div>
            <img
                src={sprites.other['offical-artwork'].front_default}
                alt={name}
                height='auto'
                width='100%'
            />
            <h1>{name}</h1>
            <ul>
                <li>Base Experience: {base_experience}</li>
                <li>Height: {height}</li>
                <li>Weight: {weight}</li>
            </ul>
            <h2>Moves:
                {moves.map(moveData => {
                    return (
                        <li key={moveData.move.name}>
                            {moveData.move.name}
                        </li>
                    )
                })}



            </h2>
        </Container>
    )
}

export default PokemonDetails