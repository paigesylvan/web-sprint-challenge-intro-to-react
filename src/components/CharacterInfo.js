import React from 'react'
import Character from './Character'

export default function CharacterInfo(props) {
    const {characters} = props;

    return (

    <div className='character-containter'>

        <div className = 'eachCharacter'>  </div>
            <ol>
                <h3> Name: {props.characters.name} </h3>
                <h3> Gender: {props.characters.gender} </h3>
                <h3> Height: {props.characters.height} </h3>
                <h3> Mass: {props.characters.mass} </h3>
                <h3> Birth Year: {props.characters.birth_year}</h3>
                <h3> Eye Color: {props.characters.eye_color} </h3>
                <h3> Hair Color: {props.characters.hair_color} </h3>
                <h3> Skin Color: {props.characters.skin_color} </h3>
             </ol>
      </div>


    )
}
console.log(CharacterInfo)

//const dummyData = {
//name: "Luke Skywalker",ß
//gender: "male",
//height: "172",
//mass: "77",
//birth_year: "19BBY",
////eye_color: "blue",
//hair_color: "blond",
//skin_color: "fair",
//}
