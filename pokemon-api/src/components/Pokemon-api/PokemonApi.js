import axios from 'axios';
import React, { useEffect , useState} from 'react';

const PokemonApi = () => {

    const [pokemons, setPokemons] = useState([]);
    const [hayPokemons, setHaypokemons] = useState(false);
    //const [loading, setLoading] = useState(false)

    useEffect(() => {
        getPokemons()
    }, []);
    
    const getPokemons = async () =>{
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=807`);
            setPokemons(res.data.results);
    //       setLoading(true);
        } catch (error) {
            alert(error.message);
        }
    }
    const fetchPokemons = () =>{
        setHaypokemons(true)
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
