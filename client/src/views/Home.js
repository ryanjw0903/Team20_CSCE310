import React from "react";
import './Home.css'
import Facts from "./factsheet"
import 'bootstrap/dist/css/bootstrap.css';
import {useState, useEffect} from 'react';
import { Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';


export default function Home(){
  const[movieName, setMovieName] = useState('...');
  const[allMovies, setAllMovies] = useState([]);
  const[allActors, setAllActors] = useState([]);
  const[allCharacters, setAllCharacters] = useState([]);
  const[facts, setFacts] = useState(null);


  const handleSelect=(e)=>{
    console.log(e.target.value);
    setMovieName(e.target.value);
    setFacts(null)
  }

// Gets SELECT * on first render of home page
useEffect(() => {
     fetch("/allMovies")
     .then(res => res.json())
      .then(res => {
          setAllMovies(res);
      })
      .catch(err => {
        console.error("Error", err);
    })

    fetch("/allActors")
       .then(res => res.json())
      .then(res => {
          setAllActors(res);
      })
      .catch(err => {
        console.error("Error", err);
    })

    fetch("/allCharacters")
       .then(res => res.json())
      .then(res => {
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
     setFacts(res);
  })
  .catch(err => {
   console.error("Error", err);
  })
  event.preventDefault();
}

return (
    <React.Fragment>
    <div>
      <div>
        <div>
          <div>
            <div className="centered">
              <h3 className = "movieInput">Input movie here:</h3>
              <Form.Select aria-label="Default select example"
                onChange={handleSelect} 
                >
                  <option>Select a Movie</option>
                  <option value="Iron Man">Iron Man</option>
                  <option value="Iron Man 2">Iron Man 2</option>
                  <option value="Thor">Thor</option>
                  <option value="Captain America: The first Avenger">Captain America: The First Avenger</option>
                  <option value="Marvel\'s The Avengers">"Marvel's The Avengers</option>
                  <option value="Iron man 3">Iron Man 3</option>
                  <option value="Thor: The Dark World">Thor: The Dark World</option>
                  <option value="Captain America: The Winter Soldier">Captain America: The Winter Soldier</option>
                  <option value="Guardians of the Galaxy" >Guardians of the Galaxy</option>
                  <option value="Avengers: Age of Ultron">Avengers: Age of Ultron</option>
                  <option value="Ant-Man" >Ant-Man</option>
                  <option value="Captain America">Captain America</option>
                  <option value="Doctor Strange">Doctor Strange</option>
                  <option value="Guardians of the Galaxy Vol. 2" >Guardians of the Galaxy Vol. 2</option>
                  <option value="spider-Man: Homecoming">Spider-Man: Homecoming</option>
                  <option value="Thor: Ragnarok">Thor: Ragnarok</option>
                  <option value="Black Panther" >Black Panther</option>
                  <option value="Avengers: Infinity War">Avengers: Infinity War</option>
                  <option value="Ant-Man and the Wasp" >Ant-Man and the Wasp</option>
                  <option value="Captain Marvel">Captain Marvel</option>
                  <option value="Avengers: End Game">Avengers: End Game</option>
                  <option value="Spider-Man: Far From Home">Spider-Man: Far From Home</option>
                </Form.Select>
                <Button className = "btn btn-primary" type = "button" onClick = {handleSubmit}>
                    Enter
                </Button>
            </div>
            <div>
              <div style = {{textAlign: 'center', fontSize: '30px'}}>
                <label className = "labelInput">Fun Facts:</label>
                  {facts ? (
                    <div style = {{textAlign: 'center', backgroundColor: '#995050', color: 'white'}}>
                      <Facts facts={facts}/>
                    </div>
                  ):(
                    <div style = {{textAlign: 'center', backgroundColor: '#995050', color: 'white'}}>
                      Once you select movie title and click enter, we'll fill this up with fun facts.<br/><br/><br/>
                    </div>
                  )}
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}