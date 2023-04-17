import { useState, useEffect } from "react";

function PokemonViewer({ id }) {
  const [pokemon, setPokemon] = useState({});
  const [idTwo, setIdTwo] = useState(1);
 

useEffect (()=> {
  async function fetchPokemon(){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idTwo}`);
    const data = await response.json();

    setPokemon(data);
  }
  fetchPokemon();
}, [idTwo]);

function randomNumber() {
  const random = Math.floor(Math.random() * 152);
  setIdTwo(random);
 }


  return (
     <div className="pokemon-viewer">
  <h1>{pokemon.name}</h1>
  <p>Pokemon ID: {pokemon.id}</p>
  <button onClick={randomNumber}>Random Pokemon</button>
  
  </div>
  );
}

export default PokemonViewer;
