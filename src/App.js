import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'

const App = () => {
  const [starwarsCharacter, setstarwarsCharacter] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setstarwarsCharacter(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  console.table(starwarsCharacter)
  const Character = starwarsCharacter.map(inner => inner.name + inner.height + inner.mass + inner.hair_color + inner.skin_color)

  console.log(Character)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {Character}
      
    </div>
  );
}

export default App;
