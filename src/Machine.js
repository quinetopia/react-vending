import React from "react";
import { Link } from "react-router-dom"

function Machine() {
  return (
    <div className="Machine-container">
      <Link exact to="/Beer" >Buy beer</Link> 
      <Link exact to="/Coffee" >Buy coffee</Link> 
      <Link exact to="/Sardines" >Buy sardines</Link> 
      <Link exact to="/Pizza" >Buy pizza</Link> 
    </div>
  )
}

export default Machine;