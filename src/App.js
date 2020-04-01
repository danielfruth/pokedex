import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  function getPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=20`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPokemon(data.results);
      })
      .catch(() => {
        console.error();
      });
  }
  console.log(pokemon);
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <ul>
        {pokemon.map(pokemon => (
          <li>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
