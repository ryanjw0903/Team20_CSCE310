import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import './Admin.css';
import Signup from "./Signup";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (

<div class="container">
<h3 class = "title">GOMARVELFACTS</h3>
  <div class="row">
          <div class="col-sm-4">
            <label class = "labelType">Movie </label>
            <label class = "labelOne" for="movie">Name:</label>
            <input type="text" id = "movie" class="form-control" aria-label="Large" placeholder = "ex: The Avengers" />  
            <label class = "labelOne" for="movie">Length:</label>  
            <input type="text" id = "movie" class="form-control" aria-label="Large" placeholder = "ex: 122" /> 
            <label class = "labelOne" for="movie">Director:</label>   
            <input type="text" id = "movie" class="form-control" aria-label="Large" placeholder = "ex: Samuel Jackson" /> 
            <label class = "labelOne" for="movie">Description:</label>   
            <input type="text" id = "movie" class="form-control" aria-label="Large" placeholder = "ex: Iron man dies" />               
            <button type="button"   class="btn btn-primary">Insert</button>        
            <button type="button"   class="btn btn-primary">Delete</button>  
            <button type="button"   class="btn btn-primary">Update</button>  
          </div>
          <div class="col-sm-4">
            <label class = "labelType">Actor </label>
            <label class = "labelOne" for="movie">Name:</label>
 
            <input type="text" id = "movie" class="form-control" aria-label="Large" placeholder = "ex: Brad Pitt" />  
            <label class = "labelOne" for="movie">Age:</label>  
            <input type="text" id = "movie" class="form-control" aria-label="Large" placeholder = "ex: 122" /> 
            <label class = "labelOne" for="movie">Birthday:</label>   
            <input type="text" id = "movie" class="form-control" aria-label="Large" placeholder = "ex: 12/2/1984" />             
            <button type="button"   class="btn btn-primary">Insert</button>        
            <button type="button"   class="btn btn-primary">Delete</button>  
            <button type="button"   class="btn btn-primary">Update</button>  
          </div>
          <div class="col">
          <label class = "labelType">Character </label>
          <label class = "labelOne" for="movie">Name:</label>
            <input type="text" id = "movie" class="form-control" aria-label="Large" placeholder = "ex: Iron Man" />   
            <label class = "labelOne" for="movie">Description:</label>   
            <input type="text" id = "movie" class="form-control" aria-label="Large" placeholder = "ex: He is played by Robert Downey Jr." />          
            <button type="button"   class="btn btn-primary">Insert</button>        
            <button type="button"   class="btn btn-primary">Delete</button>  
            <button type="button"   class="btn btn-primary">Update</button>  
          </div>
    </div>
 
  </div>

  );
}
