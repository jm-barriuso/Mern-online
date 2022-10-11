import React, { useEffect , useState} from 'react';

const PokemonApi = () => {

    const [pokemons, setPokemons] = useState([]);
    const [hayPokemons, setHaypokemons] = useState(false);
    const [limit, setLimit] = useState(10)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
            .then(response => response.json())
            .then(response => setPokemons(response.results))
    }, [limit]);
    
    
    const fetchPokemons = () =>{
        let addLimit = limit + 10
        console.log('fetch pokemons')
        setLimit(addLimit)
        setHaypokemons(true)
        console.log(addLimit)
    }

    return (
        <div>
            <button onClick={ fetchPokemons } >fetch pokemon</button>
            {hayPokemons ? pokemons.map((pokemon, index) => {
                return (<div key={index}> {index+1}.-{pokemon.name} </div>)
            }):''
            }
        </div>
    );
}

export default PokemonApi;
