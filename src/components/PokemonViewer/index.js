import { useState, useEffect } from "react";

function PokemonViewer({ id }) {
  const [name, setName] = useState("")
  const [weight, setWeight] =useState ("")
  const [pokemonId, setPokemonId] =useState ("")

  //TODO: Task 1 - send http request to `https://pokeapi.co/api/v2/pokemon/1' and display the data
  useEffect (()=> {
async function fetchPokemon(){
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/1", {
    headers: { accept: "application/json"},
  });
  const data = await res.json();
  console.log(data);
  setName(data.name)
  setWeight(data.weight)
  setPokemonId(data.id)
}
fetchPokemon();
  }, []);
  
  // TODO: Task 2 - send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!



  return <div className="pokemon-viewer">
  <p>Name: {name}</p>
  <p>Weight: {weight}kg</p>
  <p>Pokemon ID: {id}</p>
  </div>;
}

export default PokemonViewer;
