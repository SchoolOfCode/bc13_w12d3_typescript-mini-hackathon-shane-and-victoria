import React from "react";
import "./App.css";
import { useState } from "react";


function App() {
const [age, setAge] = useState("")
const [name, setName] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setName(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log("yeas");
    const result = await fetch(`https://api.agify.io/?name=${name}`);
    const data = await result.json();
    setAge(data.age);
    console.log(data);
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* age goes in here */}
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIoHv-y7oGHZWf0PGQd4HobY_6hEwfxDdaQ&usqp=CAU" className="spinny-bg" alt="logo" /> */}

        {/* age displays here */}
        <h1 className="spinny-spinny">{age}</h1>
        <form onSubmit={((e) => handleSubmit(e))}>
          <input type="text" placeholder="your name here" value={name} onChange={(e) => handleChange(e)} />
          <input type="button" value="GET RESULTS!" />
        </form>
      </header>
    </div>
  );
}

export default App;