import React from 'react';
import Home from './views/Home'
import Login from './views/Login'
import Admin from './views/Admin'
import { Link, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
    <nav className="navbar navbar-light">
      <ul className="nav navbar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Admin">Admin</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path="/Login" element ={<Login />}/>
      <Route path="/Admin" element ={<Admin />}/>

    </Routes>
  </div>
  );
}

export default App;
