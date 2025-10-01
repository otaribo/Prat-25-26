import React from "react"
import "./App.css";
import Saludo from "./Saludo.js";

function App() {
  return(
    <div className="App">
        <Saludo name="Aitor"/>
        <Saludo name="Esteban"/>
    </div>
  );
}

export default App;