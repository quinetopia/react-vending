import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import './App.css';
import Machine from "./Machine"
import Sardines from "./Sardines"
import Beer from "./Beer"
import Pizza from "./Pizza"
import Coffee from "./Coffee"
import NavBar from "./NavBar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Route exact path="/">
          <Machine />
        </Route>
        <Route exact path="/Sardines">
          <Sardines />
        </Route>
        <Route exact path="/Beer">
          <Beer />
        </Route>
        <Route exact path="/Pizza">
          <Pizza />
        </Route>
        <Route exact path="/Coffee">
          <Coffee />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
