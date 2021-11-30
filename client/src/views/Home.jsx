import React from "react";
import './Home.css'
import { useState } from 'react';
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
export default function Home(){
  const[movieName, setMovieName] = useState("");


// useEffect(() => {
//     fetch("/movies")
//       .then(res => res.json())
//       .then(res => {
//           console.log(res);
//           setData(res.message);
//       })
//       .catch(err => {
//         console.error("Error", err);
//       })
//   }, []);
function handleSubmit(event){
  console.log(movieName);
  event.preventDefault();

  //this.setState({movieName: name})
}

return (
    <div className="main-page">
      <h3 className = "title">GOMARVELFACTS</h3>
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
                {/* <label className = "labelInput" for="movie">Marvel Movie:</label>
                <input type="text" id = "movie" className="form-control" aria-label="Large" placeholder = "ex: Iron Man" />    
                <button type="button" className="btn btn-primary" onClick={this.getMovie}>Enter</button> */}
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

