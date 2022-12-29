import { useState } from "react";
import "./App.css";

function App() {
  const title = "FoodGenie";
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')

  function handleInput(event) {
    setInput(event.target.value)
  }

  function handleSubmit() {
    setSearch(input);
    setInput('');
  }

  return (
    <div className="app">
      <div className="title">
        <p>{title}</p>
        <div className="bulb"></div>
      </div>
      <input type="text" onChange={event => handleInput(event)} value={input}/>
      <div className="buttonContainer">
        <button type="submit" onClick={handleSubmit}>Search</button>
        <button>Surpise Me!</button>
      </div>
      {input !== '' ? <p>input: {input}</p> : <p>Input: </p>}
      {search !== '' ? <p>search: {search}</p> : <p>Search: </p>}
    </div>
  );
}

export default App;
