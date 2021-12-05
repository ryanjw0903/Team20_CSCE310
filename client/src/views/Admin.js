import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import './Admin.css';

export default function Admin() {
  const [movieName, setMoviename] = useState("");
  const [movieLength, setMovielength] = useState("");
  const [movieDirector, setMoviedirector] = useState("");
  const [movieDescription, setMoviedescription] = useState("");
  const [actorName, setActorname] = useState("");
  const [actorAge, setActorage] = useState("");
  const [actorBirthday, setActorbirthday] = useState("");
  const [characterName, setCharactername] = useState("");
  const [characterDescription, setCharacterdescription] = useState("");

  function insertMovie(event){
    //console.log("entered insert movie");
    event.preventDefault();
    // console.log(movieName + movieLength + movieDirector + movieDescription);

  }

  function deleteMovie(event){
    //console.log("entered delete movie");
    event.preventDefault();
    //console.log(movieName + movieLength + movieDirector + movieDescription);

  }

  function updateMovie(event){
    //console.log("entered update movie");
    event.preventDefault();
    //console.log(movieName + movieLength + movieDirector + movieDescription);

  }

  function insertActor(event){
    //console.log("entered insert actor");
    event.preventDefault();
   //console.log(actorName + actorAge + actorBirthday);

  }
  function deleteActor(event){
    //console.log("entered delete actor");
    event.preventDefault();
    //console.log(actorName + actorAge + actorBirthday);

  }
  function updateActor(event){
    //console.log("entered update actor");
    event.preventDefault();
    //console.log(actorName + actorAge + actorBirthday);

  }
  function insertCharacter(event){
    //console.log("entered insert character");
    event.preventDefault();
    //console.log(characterName + characterDescription);

  }
  function deleteCharacter(event){
    //console.log("entered delete character");
    event.preventDefault();
    //console.log(characterName + characterDescription);

  }
  function updateCharacter(event){
    console.log("entered update character");
    event.preventDefault();
    //console.log(characterName + characterDescription);

  }
  return (
<div className="container">
  <div className="row">
          <div className="col-sm-4">
            <label className = "labelType">Movie </label>
            <Form>
              <Form.Group size = "sm">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                placeholder = "The Avengers"
                value={movieName}
                onChange={(e)=>setMoviename(e.target.value)}
                />
              </Form.Group>
              <Form.Group size = "sm">
                <Form.Label>Length:</Form.Label>
                <Form.Control
                placeholder = "122"
                value={movieLength}
                onChange={(e)=>setMovielength(e.target.value)}
                />
              </Form.Group>
              <Form.Group size = "sm">
                <Form.Label>Director:</Form.Label>
                <Form.Control
                placeholder = "Jack Black"
                value={movieDirector}
                onChange={(e)=>setMoviedirector(e.target.value)}
                />
              </Form.Group>
              <Form.Group size = "sm">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                placeholder = "Iron man dies."
                value={movieDescription}
                onChange={(e)=>setMoviedescription(e.target.value)}
                />
              </Form.Group>
            <Button className = "btn btn-primary" onClick = {insertMovie}>
            Insert
            </Button>
            <Button className = "btn btn-primary" onClick= {deleteMovie}>
            Delete
            </Button>
            <Button className = "btn btn-primary" onClick = {updateMovie}>
            Update
            </Button>
            </Form>
          </div>
          <div className="col-sm-4">
          <Form>
              <Form.Group size = "sm">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                placeholder = "Brad Pitt"
                value={actorName}
                onChange={(e)=>setActorname(e.target.value)}
                />
              </Form.Group>
              <Form.Group size = "sm">
                <Form.Label>Age:</Form.Label>
                <Form.Control
                placeholder = "48"
                value={actorAge}
                onChange={(e)=>setActorage(e.target.value)}
                />
              </Form.Group>
              <Form.Group size = "sm">
                <Form.Label>Birthday:</Form.Label>
                <Form.Control
                placeholder = "12/01/1985"
                value={actorBirthday}
                onChange={(e)=>setActorbirthday(e.target.value)}
                />
              </Form.Group>
        
            <Button className = "btn btn-primary" onClick = {insertActor}>
            Insert
            </Button>
            <Button className = "btn btn-primary" onClick = {deleteActor}>
            Delete
            </Button>
            <Button className = "btn btn-primary" onClick = {updateActor}>
            Update
            </Button>
            </Form>
          </div>
          <div className="col">
          <Form>
              <Form.Group size = "sm">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                placeholder = "Iron Man"
                value={characterName}
                onChange={(e)=>setCharactername(e.target.value)}
                />
              </Form.Group>
              <Form.Group size = "sm">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                placeholder = "He is played by Robert Downey Jr."
                value={characterDescription}
                onChange={(e)=>setCharacterdescription(e.target.value)}
                />
              </Form.Group>
            <Button className = "btn btn-primary" onClick = {insertCharacter}>
            Insert
            </Button>
            <Button className = "btn btn-primary" onClick = {deleteCharacter}>
            Delete
            </Button>
            <Button className = "btn btn-primary" onClick = {updateCharacter}>
            Update
            </Button>
            </Form>
          </div>
    </div>
 
  </div>

  );
}

