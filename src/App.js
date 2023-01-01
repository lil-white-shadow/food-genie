import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const title = "FoodGenie";
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')

  const [ingredients, setIngredients] = useState('')
  const [ingredientsSource, setIngredientsSource] = useState('')
  // const [imageUrl, setImageUrl] = useState('')
  
  useEffect(() => {
    let key = 'AIzaSyBovUDUlWQu_lLCsJHNFQC5AnUJT3vrUdg'
    let url = "https://www.googleapis.com/customsearch/v1?key=" + key + "&cx=f2a2aa6d87dfc4e07&q="
    if(search !== '') {
      fetch(url + search + "&num=1")
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(response => {
        let snippet = response.items[0].snippet
        let source = response.items[0].formattedUrl
        // let imageUrl = response.items[0].formattedUrl
        setIngredients(snippet)
        setIngredientsSource(source)
        // setImageUrl
      })
  }
    console.log(ingredients)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])
  

  function handleInput(event) {
    setInput(event.target.value)
  }

  function handleSubmit() {
    setSearch(input);
    setInput('')

    // setInput('');
    // console.log(search)
    // fetch(url + search + "&num=1")
    // .then(response => response.json())
    // .then(response => response.items[0].htmlSnippet)
    // .then(sentence => {
    //   console.log(sentence)
    //   if(sentence.indexOf(' is ') < sentence.indexOf(' are ')) {
    //     setIngredients(sentence.substring(sentence.indexOf(' is') + 3, sentence.indexOf(' are')).replace('.', ',').replace(' and', ',').toLowerCase().replace(/\s*,\s*/g, ',').replace(' and ', ',').replace('<b>', '').replace('</b>', '').split(','))
    //   } else {
    //     setIngredients(sentence.substring(sentence.indexOf(' are') + 4, sentence.indexOf(' also')).replace('.', ',').replace(' and', ',').toLowerCase().replace(/\s*,\s*/g, ',').replace(' and ', ',').replace('<b>', '').replace('</b>', '').split(','))
    //   }
    //   });
    // console.log(ingredients)

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
      <div className="results">
        {input !== '' ? <p>Input: {input}</p> : <p>Input: </p>}
        {search !== '' ? <p>Search: {search}</p> : <p>Search: </p>}
        {ingredients !== '' ? <p>Ingredients: {ingredients}  <a href={ingredientsSource}>Read more</a>[Source: {ingredientsSource.substring(8, ingredientsSource.indexOf('com') + 3)}]</p> : <p>Ingredients: </p>}
      </div>
    </div>
  );
}


/* 
Components
1. Home - Search input for any dish or ingredient
2. Home - buttons = ingredients, nutrition, near me
3. Ingredients - ingredients card
4. Nutrition - nutrition info card
5. Near me - google map results for restaurants or stores
*/