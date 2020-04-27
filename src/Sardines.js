import React from "react";
import { Link } from "react-router-dom"

function Sardines() {
  return (
    <div className="Sardines-container">
      <h3>Do you want Sardines?</h3>
      <Link exact to="/" >This is fishy, take me back to the vending machine!</Link> 
    </div>
  )
}

export default Sardines;