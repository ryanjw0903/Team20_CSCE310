import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './views/Home'
import Login from './views/Login'

function App() {
  return (
    <div className = "App">
      <Login/>
    </div>
  );
}

export default App;
