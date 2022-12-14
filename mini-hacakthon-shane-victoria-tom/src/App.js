import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {useState, useEffect} from "react"
//

function App() {
const [age, setAge] = useState(0)
const [name, setName] = useState("")

  const url = `https://api.agify.io/?name=${age}`

  // do fetch request to age api using input from form box 
  async function getAge(url){
    const result = await fetch(url);
    const data = await result.json();
    setAgeState(data.rows.age)
  }

  // sets the value of the box to the input
onchange(e){
  setName(e.target.value);
}

onSubmit(){

}


  return (
    <div className="App">
      <header className="App-header">
        {/* age goes in here */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* age displays here */}
        <h1 className="App-logo">Edit and save to reload.</h1>
        <form onSubmit = {onSubmit}>
          <input type="text" placeholder="your name here" value = {age} onChange = {onChange} />
          <input type="button" value ="GET RESULTS!" />
        </form>
      </header>
    </div>
  );
}

export default App;
