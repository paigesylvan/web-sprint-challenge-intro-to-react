import React, { useState, useEffect} from 'react';
import axios from 'axios';

import Character from './components/Character.js';
//import CharacterInfo from '.components/CharacterInfo.js'

//import {data} from './mocks/handlers.js'

//const {characters} = props;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [characters, setCharacters] = useState([])
const [currentCharacterId, setCurrentCharacterId] = useState(null)



const openDetails = id => {
  setCurrentCharacterId(id)
}

const closeDetails = () => {
  setCurrentCharacterId(null)
}




useEffect(() => {
  axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setCharacters(res.data)
    })
    .catch (err => console.error(err))
}, [])


return (
  <div className='container'>
    <h1>React Wars</h1>
    {
      characters.map(fr => {
        return <Character key={fr.id} info={fr} />
      })
    }
    {
      currentCharacterId && <CharacterInfo characterId={currentCharacterId} close={closeDetails} />
    }
  </div>
)


}

export default App;