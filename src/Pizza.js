import React from "react";
import { Link } from "react-router-dom"

function Pizza() {
  return (
    <div className="Pizza-container">
      <h3>Do you want Pizza?</h3>
      <Link exact to="/" >Back to the vending machine!</Link> 
    </div>
  )
}

export default Pizza;