import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import './App.css';

function App() {
  var navigation = useNavigate()
  function navi() {
    navigation("/Home")
  }
  //------------------Navlink--------------------//  
  var makeactive = (a) => {
    return {
      margin: "1rem0",
      color: a ? 'red' : ''
    }
  }
  return (
    <div className="border m-2 p-2">
      <h1 className="country">THE LIST OF COUNTRIES</h1>
      <NavLink to="/Home" style={({ isActive }) => { return makeactive(isActive) }}>Home</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to="/countries" style={({ isActive }) => { return makeactive(isActive) }}>Click For Countries</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to="/Aboutus" style={({ isActive }) => { return makeactive(isActive) }}>About us...</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to="/Contactus" style={({ isActive }) => { return makeactive(isActive) }}>Contact Us...</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to="/paragraph" style={({ isActive }) => { return makeactive(isActive) }}>Paragraph</NavLink>

      <button onClick={navi} className="comp">Click HOME</button>
      <Outlet></Outlet>

    </div>
  );
  //------------------Navlink--------------------//
}

export default App;