import React from 'react';
import Home from './views/Home'
import './App.css'
import {Link, Route, Switch} from "react-router-dom";

function App() {
  return (
      <React.Fragment>

        <div class="nav-wrapper">
          <h1>GoMarvelFacts</h1>
        </div>
        <Home/>
   </React.Fragment>
  );
}

export default App;
