import React from 'react';
import Home from './views/Home'
import './App.css'
import {Link, Route, Routes} from "react-router-dom";

function App() {
  return (
      <React.Fragment>
        <div class="nav-wrapper">
          <h1>GoMarvelFacts</h1>
          <nav className="nav-container">
            <ul className="nav-style">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </nav>
        </div>

      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>

   </React.Fragment>
  );
}

export default App;
