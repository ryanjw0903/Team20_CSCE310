import React from "react";
import './Home.css'
import {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';


export default function Home(){
  const[movieName, setMovieName] = useState("");
  const[allMovies, setAllMovies] = useState([]);
  const[allActors, setAllActors] = useState([]);
  const[allCharacters, setAllCharacters] = useState([]);


// Gets SELECT * on first render of home page
useEffect(() => {
     fetch("/movies")
     .then(res => res.json())
      .then(res => {
          console.log(res);
          setAllMovies(res);
      })
      .catch(err => {
        console.error("Error", err);
    })

    fetch("/actors")
       .then(res => res.json())
      .then(res => {
          console.log(res);
          setAllActors(res);
      })
      .catch(err => {
        console.error("Error", err);
    })


    fetch("/characters")
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
  console.log(movieName);
  event.preventDefault();

  //this.setState({movieName: name})
}

return (
    <div className="main-page">
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-18">
          <div className="centered">
              <div className="col-lg-6">
                <Form onSubmit = {handleSubmit}>
                  <Form.Group size = "lg">
                  <Form.Label>Movie Name: </Form.Label>
                  <Form.Control
                    autoFocus
                    type="text"
                    value={movieName}
                    onChange={(e) => setMovieName(e.target.value)}
                    />
                  </Form.Group>
                  <Button className = "btn btn-primary" type = "submit">
                    Enter
                  </Button>
                  </Form>
              </div>
          </div>

          <div className = "row">
              <div className = "col-lg-6" style = {{textAlign: 'center', fontSize: '25px'}}>
                <label className = "labelInput">Fun Facts:</label>
                <div className="col-lg-6" style = {{textAlign: 'center', backgroundColor: '#995050', color: 'white'}}>
                  Once you submit the movie title, we'll fill this up with fun facts.<br/><br/><br/>
                </div>
              </div>
          </div>
      </div>
      </div>
    </div>
    </div>
  );
  }

