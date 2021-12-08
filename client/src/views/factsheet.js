import React from "react";
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
       {fact1.map((val, idx) => 
         <li key={idx}>{val.description}</li>
       )}
       {fact2.map((val, idx) => 
         <li key={idx}>{val.name}</li>
       )}
        {fact3.map((val, idx) => 
         <li key={idx}>{val.name}</li>
       )}
       {fact4.map((val, idx) => 
         <li key={idx}>{val.value}  {val.length}</li>
       )}
       {fact5.map((val, idx) => 
         <li key={idx}>{val.age}</li>
       )}
    </React.Fragment>
  );
}

