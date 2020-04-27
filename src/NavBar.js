import React from "react";
import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="NavBar-strip">
      <NavLink exact to="/Beer" >Buy beer</NavLink> 
      <NavLink exact to="/Coffee" >Buy coffee</NavLink> 
      <NavLink exact to="/Sardines" >Buy sardines</NavLink> 
      <NavLink exact to="/Pizza" >Buy pizza</NavLink> 
    </nav>
  )
}

export default NavBar;