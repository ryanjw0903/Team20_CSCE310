import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import './Admin.css';
import Signup from "./Signup";
class Admin extends React.Component{
  constructor(){
    super();
    this.state={
      movieName:"",
      movieLength:"",
      movieDirector:"",
      movieDescription:"",
      actorName:"",
      actorAge:"",
      actorBirthday:"",
      characterName:"",
      characterDescription:""
    }
    this.getInfo = this.getInfo.bind(this);
    this.insertMovie = this.insertMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.updateMovie = this.updateMovie.bind(this);
    this.insertActor = this.insertActor.bind(this);
    this.deleteActor = this.deleteActor.bind(this);
    this.updateActor = this.updateActor.bind(this);
    this.insertCharacter = this.insertCharacter.bind(this);
    this.deleteCharacter = this.deleteCharacter.bind(this);
    this.updateCharacter = this.updateCharacter.bind(this);
  }
  getInfo(){
    var _movieName = document.getElementById('movieName').value;
    var _movieLength = document.getElementById('movieLength').value;
    var _movieDirector = document.getElementById('movieDirector').value;
    var _movieDescription = document.getElementById('movieDescription').value;
    var _actorName = document.getElementById('actorName').value;
    var _actorAge = document.getElementById('actorAge').value;
    var _actorBirthday = document.getElementById('actorBirthday').value;
    var _characterName = document.getElementById('characterName').value;
    var _characterDescription = document.getElementById('characterDescription').value;
    this.setState({
      movieName: _movieName, movieLength: _movieLength, movieDirector:_movieDirector, actorName:_actorName, actorAge:_actorAge, actorBirthday:_actorBirthday, characterName:_characterName, characterDescription: _characterDescription
    });
    //console.log(_movieName + " " + _movieLength + " " + _movieDirector + " " + _movieDescription + " " + _actorName + " " + _actorAge + " " + _actorBirthday + " " + _characterName + " " + _characterDescription);
  }

  insertMovie(){
    this.getInfo();
    //console.log(this.state.movieName + " " + this.state.movieLength + " " + this.state.movieDirector + " " + this.state.movieDescription + " " + this.state.actorName + " " + this.state.actorAge + " " + this.state.actorBirthday + " " + this.state.characterName + " " + this.state.characterDescription);

  }

  deleteMovie(){
    this.getInfo();
  }

  updateMovie(){
    this.getInfo();
  }

  insertActor(){
    this.getInfo();
  }
  deleteActor(){
    this.getInfo();
  }
  updateActor(){
    this.getInfo();
  }
  insertCharacter(){
    this.getInfo();
  }
  deleteCharacter(){
    this.getInfo();
  }
  updateCharacter(){
    this.getInfo();
  }
  
  handleSubmit(event) {
    event.preventDefault();
  };

render(){
  return (

<div class="container">
<h3 class = "title">GOMARVELFACTS</h3>
  <div class="row">
          <div class="col-sm-4">
            <label class = "labelType">Movie </label>
            <label class = "labelOne" for="movie">Name:</label>
            <input type="text" id = "movieName" class="form-control" aria-label="Large" placeholder = "ex: The Avengers" />  
            <label class = "labelOne" for="movie">Length:</label>  
            <input type="text" id = "movieLength" class="form-control" aria-label="Large" placeholder = "ex: 122" /> 
            <label class = "labelOne" for="movie">Director:</label>   
            <input type="text" id = "movieDirector" class="form-control" aria-label="Large" placeholder = "ex: Samuel Jackson" /> 
            <label class = "labelOne" for="movie">Description:</label>   
            <input type="text" id = "movieDescription" class="form-control" aria-label="Large" placeholder = "ex: Iron man dies" />               
            <button type="button"   class="btn btn-primary" onClick = {this.insertMovie}>Insert</button>        
            <button type="button"   class="btn btn-primary" onClick = {this.deleteMovie}>Delete</button>  
            <button type="button"   class="btn btn-primary" onClick = {this.updateMovie}>Update</button>  
          </div>
          <div class="col-sm-4">
            <label class = "labelType">Actor </label>
            <label class = "labelOne" for="actor">Name:</label>
            <input type="text" id = "actorName" class="form-control" aria-label="Large" placeholder = "ex: Brad Pitt" />  
            <label class = "labelOne" for="actor">Age:</label>  
            <input type="text" id = "actorAge" class="form-control" aria-label="Large" placeholder = "ex: 122" /> 
            <label class = "labelOne" for="actor">Birthday:</label>   
            <input type="text" id = "actorBirthday" class="form-control" aria-label="Large" placeholder = "ex: 12/2/1984" />             
            <button type="button"   class="btn btn-primary" onClick = {this.insertActor}>Insert</button>        
            <button type="button"   class="btn btn-primary" onClick = {this.deleteActor}>Delete</button>  
            <button type="button"   class="btn btn-primary" onClick = {this.updateActor}>Update</button>  
          </div>
          <div class="col">
          <label class = "labelType">Character </label>
          <label class = "labelOne" for="character">Name:</label>
            <input type="text" id = "characterName" class="form-control" aria-label="Large" placeholder = "ex: Iron Man" />   
            <label class = "labelOne" for="character">Description:</label>   
            <input type="text" id = "characterDescription" class="form-control" aria-label="Large" placeholder = "ex: He is played by Robert Downey Jr." />          
            <button type="button"   class="btn btn-primary" onClick = {this.insertCharacter}>Insert</button>        
            <button type="button"   class="btn btn-primary" onClick= {this.deleteCharacter} >Delete</button>  
            <button type="button"   class="btn btn-primary" onClick = {this.updateCharacter}>Update</button>  
          </div>
    </div>
 
  </div>

  );
}
}
export default Admin;
