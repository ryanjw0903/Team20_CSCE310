import React from 'react';
import Home from './views/Home'
import Login from './views/Login'
import Admin from './views/Admin'
import './App.css'
import {Link, Route, Switch} from "react-router-dom";

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
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </nav>
        </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
      </Switch>

   </React.Fragment>
  );
}

export default App;
