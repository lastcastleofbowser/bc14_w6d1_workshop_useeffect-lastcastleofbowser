import { useState, useEffect } from "react";


// Define a new component called PokemonViewer that takes an "id" prop
function PokemonViewer({ id }) {


  // Define two state variables: "pokemon" and "idTwo"
  const [pokemon, setPokemon] = useState({});
  const [idTwo, setIdTwo] = useState(1);
  
  // Use the useEffect hook to fetch the data for the current Pokemon whenever the "idTwo" state variable changes
  useEffect (()=> {
    
    // Define an async function called fetchPokemon that fetches the data for the current Pokemon from the PokeAPI
    async function fetchPokemon(){
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idTwo}`);
      const data = await response.json();
      setPokemon(data); /* sets the pokemon state variable to the data object returned by the PokeAPI. */
    }
    
    // Call the fetchPokemon function when the component mounts, and every time the "idTwo" state variable changes
    fetchPokemon();
  }, [idTwo]);

  // Define a function called randomNumber that generates a random number between 1 and 152 and sets it as the new value of the "idTwo" state variable.
  function randomNumber() {
    const random = Math.floor(Math.random() * 152) + 1;
    setIdTwo(random);
  }
  
  
  // Render the PokemonViewer component, which displays the name, image, ID, weight, and a button that generates a new random Pokemon
  return (
    <div className="pokemon-viewer">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
      <p>Pokemon ID: {pokemon.id}</p>
      <p>Weight: {pokemon.weight}kg</p>
      <button onClick={randomNumber}>Random Pokemon</button>
    </div>
    
  );
}

// Export the PokemonViewer component so it can be used in other parts of the application
export default PokemonViewer;
