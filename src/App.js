import React, { useState} from 'react';
//import axios from 'axios';

import {data} from './mocks/handlers.js'
console.log(data)

//import Characters from './components/Character.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [characters, setCharacters] = useState([data])

return (
  <div className = 'app-list'>
    <h1> {[characters.name]} </h1>
    console.log({[characters.name]})
  </div>
)

}

export default App;