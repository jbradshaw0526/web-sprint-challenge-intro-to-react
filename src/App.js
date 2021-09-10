import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components';
import Character from './components/Character'
import Info from './components/Info';

const App = () => {
  // const [starwarsCharacter, setstarwarsCharacter] = useState([])

  const [characters, setCharacters] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [error, setError] = useState(null);


  const openInfo = (id) =>
  {
      const character = characters.filter(item => item.id === id);
      setCurrentCharacter(character);
  };

  const closeInfo = () =>
  {
      setCurrentCharacter(null);
  };

  useEffect(() =>
  {
      console.log("Fetching the characters...");
      axios.get("https://swapi.dev/api/people")
          .then(response =>
          {
              // save 'response.data' in local variable 'characters'
              const characters = response.data;

              // add an 'id' to each character on the fly
              let id = 1;
              characters.forEach(item => item.id = id++);

              console.log(characters);
              setCharacters(characters);
          })
          .catch(err =>
          {
              console.error(err);
              setError(err);
          });
  }, []);


  const HeaderContainer = styled.header`
        color: black;
        text-shadow: 3px 3px 8px red;
        text-align: center;
        font-size: 30px;
    `;

    const Row = styled.div`

    `;

    const Column = styled.div`
        flex: 30%;
    `;

    return (
        <div className="App">
            <HeaderContainer>Star Wars Characters</HeaderContainer>
            {error && <h2>{error}</h2>}
            <Row>
                <Column>
                    {
                        characters && characters.map(item =>
                        {
                            return <Character
                                key={item.id}
                                info={item}
                                openInfo={openInfo}
                                closeInfo={closeInfo}
                                currentCharacter={currentCharacter}
                            />;
                        })
                    }
                </Column>
                <Column>

                    {
                        currentCharacter && <Info info={currentCharacter} closeInfo={closeInfo} />
                    }

                </Column>
            </Row>
        </div>
    );
}; 

export default App;
