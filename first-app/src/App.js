import React from "react";
import { Link, Outlet } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="border m-2 p-2">
      <h1 className="country">THE LIST OF COUNTRIES</h1>
      <Link to="/Home" className="tod">Home</Link>&nbsp;&nbsp;
      <Link to="/countries" className="tod">Click For Countries</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;