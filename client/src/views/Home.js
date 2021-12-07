import React from "react";
import './Home.css'
import 'bootstrap/dist/css/bootstrap.css';

import {useState, useEffect} from 'react';
import { Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';


export default function Home(){
  const[movieName, setMovieName] = useState('...');
  const[allMovies, setAllMovies] = useState([]);
  const[allActors, setAllActors] = useState([]);
  const[allCharacters, setAllCharacters] = useState([]);
  const[facts, setFacts] = useState([]);


  const handleSelect=(e)=>{
    console.log(e);
    setMovieName(e)
  }

// Gets SELECT * on first render of home page
useEffect(() => {
     fetch("/allMovies")
     .then(res => res.json())
      .then(res => {
          console.log(res);
          setAllMovies(res);
      })
      .catch(err => {
        console.error("Error", err);
    })

    fetch("/allActors")
       .then(res => res.json())
      .then(res => {
          console.log(res);
          setAllActors(res);
      })
      .catch(err => {
        console.error("Error", err);
    })


    fetch("/allCharacters")
       .then(res => res.json())
      .then(res => {
          console.log(res);
          setAllCharacters(res);
      })
      .catch(err => {
        console.error("Error", err);
    })
  }, []);

function handleSubmit(event){
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: movieName })
  };
  fetch("/movie", requestOptions)
  .then(res => res.json())
  .then(res => {
     console.log(res)
     setFacts(res)
  })
  .catch(err => {
   console.error("Error", err);
  })
  event.preventDefault();
}

return (
    <div className="main-page">
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-12">
              <div className="row-lg-6 centered">
              <label className = "movieInput">Input movie here:</label>
                <DropdownButton title="Dropdown right"
                  id="dropdown-menu-align-right"
                  onSelect={handleSelect} title= {movieName}>
                  <Dropdown.Item eventKey="Iron Man" as = "button" >Iron Man</Dropdown.Item>
                  <Dropdown.Item eventKey="Iron Man 2" as = "button" >Iron Man 2</Dropdown.Item>
                  <Dropdown.Item eventKey="Thor" as = "button" >Thor</Dropdown.Item>
                  <Dropdown.Item eventKey="Captain America: The first Avenger" as = "button" >Captain America: The First Avenger</Dropdown.Item>
                  <Dropdown.Item eventKey="Marvel\'s The Avengers" as = "button" >"Marvel's The Avengers</Dropdown.Item>
                  <Dropdown.Item eventKey="Iron man 3" as = "button" >Iron Man 3</Dropdown.Item>
                  <Dropdown.Item eventKey="Thor: The Dark World" as = "button" >Thor: The Dark World</Dropdown.Item>
                  <Dropdown.Item eventKey="Captain America: The Winter Soldier" as = "button" >Captain America: The Winter Soldier</Dropdown.Item>
                  <Dropdown.Item eventKey="Guardians of the Galaxy" as = "button" >Guardians of the Galaxy</Dropdown.Item>
                  <Dropdown.Item eventKey="Avengers: Age of Ultron" as = "button" >Avengers: Age of Ultron</Dropdown.Item>
                  <Dropdown.Item eventKey="Ant-Man" as = "button" >Ant-Man</Dropdown.Item>
                  <Dropdown.Item eventKey="Captain America" as = "button" >Captain America</Dropdown.Item>
                  <Dropdown.Item eventKey="Doctor Strange" as = "button" >Doctor Strange</Dropdown.Item>
                  <Dropdown.Item eventKey="Guardians of the Galaxy Vol. 2" as = "button" >Guardians of the Galaxy Vol. 2</Dropdown.Item>
                  <Dropdown.Item eventKey="spider-Man: Homecoming" as = "button" >Spider-Man: Homecoming</Dropdown.Item>
                  <Dropdown.Item eventKey="Thor: Ragnarok" as = "button" >Thor: Ragnarok</Dropdown.Item>
                  <Dropdown.Item eventKey="Black Panther" as = "button" >Black Panther</Dropdown.Item>
                  <Dropdown.Item eventKey="Avengers: Infinity War" as = "button" >Avengers: Infinity War</Dropdown.Item>
                  <Dropdown.Item eventKey="Ant-Man and the Wasp" as = "button" >Ant-Man and the Wasp</Dropdown.Item>
                  <Dropdown.Item eventKey="Captain Marvel" as = "button" >Captain Marvel</Dropdown.Item>
                  <Dropdown.Item eventKey="Avengers: End Game" as = "button" >Avengers: End Game</Dropdown.Item>
                  <Dropdown.Item eventKey="Spider-Man: Far From Home" as = "button" >Spider-Man: Far From Home</Dropdown.Item>
                </DropdownButton>
                <Button className = "btn btn-primary" type = "button" onClick = {handleSubmit}>
                    Enter
                </Button>
              </div>
              <div className = "col-lg-12">
                  <div className = "d-flex justify-content-center" style = {{textAlign: 'center', fontSize: '40px'}}>
                    <label className = "labelInput">Fun Facts:</label>
                  </div>
                  <div className="d-flex justify-content-center" style = {{textAlign: 'center', backgroundColor: '#995050', color: 'white'}}>
                      Once you submit the movie title, we'll fill this up with fun facts.<br/><br/><br/>
                  </div>
              </div>
         </div>
      </div>
    </div>
    </div>
  );
  }

