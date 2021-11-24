import React from "react";
import './Home.css'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Home() {
  const [data, setData] = useState(null);

useEffect(() => {
    fetch("/movies")
      .then(res => res.json())
      .then(res => {
          console.log(res);
          setData(res.message);
      })
      .catch(err => {
        console.error("Error", err);
      })
  }, []);

  return (
    <div className="main-page">

    <div class="container">
      
      <div class="row my-5">
        <div class="col-lg-18">
      
          <div class="centered">
              <div class="col-lg-6">
                <label class = "labelInput" for="movie">Marvel Movie:</label>
                <input type="text" id = "movie" class="form-control" aria-label="Large" placeholder = "ex: Iron Man" />    
                <button type="button"   class="btn btn-primary">Enter</button>
              </div>
          </div>

          <div class = "row">
              <div class = "col-lg-6" style = {{textAlign: 'center', fontSize: '25px'}}>
                <label class = "labelInput">Fun Facts:</label>
                <div class="col-lg-6" style = {{textAlign: 'center', backgroundColor: '#995050', color: 'white'}}>
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

export default Home;