import React from "react";
import './factsheet.css'
import {useState, useEffect} from 'react';

export default function Facts(props){
    const[fact1, setFact1] = useState(props.facts[0]);
    const[fact2, setFact2] = useState(props.facts[1]);
    const[fact3, setFact3] = useState(props.facts[2]);
    const[fact4, setFact4] = useState(props.facts[3]);
    const[fact5, setFact5] = useState(props.facts[4]);
    console.log(fact5);


 
return (
    <React.Fragment>
      <div className="fact-container">
          <h3>Fact #1</h3>
          {fact1.map((val, idx) => 
           <p key={idx}>{val.description}</p>
          )}
          <h3>Fact #2</h3>
          <p>The Main Superheroes in this film are</p>
          <ul className="fact-list">
           {fact2.map((val, idx) => 
              <li key={idx}>{val.name}</li>
           )}
          </ul>
          <h3>Fact #3:</h3>
          <p>The Main Superheroe Actors in this film are</p>
          <ul className="fact-list">
            {fact3.map((val, idx) => 
            <li key={idx}>{val.name}</li>
             )}
          </ul>
          <h3>Fact #4</h3>
          {fact4.map((val, idx) => 
             {
              if(val.value === 1){
                return <p key={idx}>The length of this movie is {val.length} minutes making it the longest movie in the marvel universe </p>
              } else{
                return <p key={idx}>The length of this movie is {val.length} minutes making it the {val.value}th longest movie in the marvel universe </p>
              }
            }
          )}
          <h3>Fact #5</h3>
          {fact5.map((val, idx) => 
            <p key={idx}>The oldest played actor age is {val.age}, can you guess who it is?</p>
          )}
       </div>
    </React.Fragment>
  );
}

