// Write your Character component here
import React, {useState} from 'react';
import axios from 'axios';

//1. Build a React component named 'Character' to render an individual character.
//1. Map over the list in state, and for each character render a Character to the page.
//1. Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
//1. The character's name can't be hard-coded into the HTML. This data must be obtained from the API.
//1. The components must be styled with **styled-components**.



const Character = (props) => {

    return (
        <div className='character'>
          {props.info.name}
  
        </div>
    )
}



export default Character;

