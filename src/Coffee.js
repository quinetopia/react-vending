import React from "react";
import { Link } from "react-router-dom"

function Coffee() {
  return (
    <div className="Coffee-container">
      <h3>Do you want Coffee?</h3>
      <Link exact to="/" >I'm too wired - back to the vending machine!</Link> 
    </div>
  )
}

export default Coffee;