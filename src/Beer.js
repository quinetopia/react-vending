import React from "react";
import { Link } from "react-router-dom"

function Beer() {
  return (
    <div className="Beer-container">
      <h3>Do you want beer?</h3>
      <Link exact to="/" >Back to the vending machine! I've had enough beer.</Link> 
    </div>
  )
}

export default Beer;