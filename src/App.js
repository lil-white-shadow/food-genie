import { useEffect, useState, useRef } from "react";
import "./App.css";
import Ingredients from "./components/Ingredients";

export default function App() {
  const title = "FoodGenie";
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const SearchRef = useRef()
  const IngredientsRef = useRef()
  const NutritionRef = useRef()
    
  function goToComponent(ref) {
    if(ref === SearchRef) {
      setIngredients('')
      setNutrition('')
    }
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }


  const [ingredients, setIngredients] = useState("The most common ingredients in pasta dishes are garlic and olive oil. Onion, angel hair pasta, parmesan cheese, parsley and tomatoes are also common ingredients ...");

  const [nutrition, setNutrition] = useState("The most common ingredients in pasta dishes are garlic and olive oil. Onion, angel hair pasta, parmesan cheese, parsley and tomatoes are also common ingredients ...");

  // const [ingredients, setIngredients] = useState("");

  const [ingredientsSource, setIngredientsSource] = useState("www.spoonablerecipes.com");
  // const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    let key = "AIzaSyBovUDUlWQu_lLCsJHNFQC5AnUJT3vrUdg";
    let url =
      "https://www.googleapis.com/customsearch/v1?key=" +
      key +
      "&cx=f2a2aa6d87dfc4e07&q=";
    if (search !== "") {
      fetch(url + search + "&num=1")
        .then((response) => response.json())
        // .then(response => console.log(response))
        .then((response) => {
          let snippet = response.items[0].snippet;
          let source = response.items[0].formattedUrl;
          console.log(source)
          // let imageUrl = response.items[0].formattedUrl
          setIngredients(snippet);
          setIngredientsSource(source);
          // setImageUrl
        })
        .then(() => {
          console.log('in last .then')
          setInput("");
          console.log('before execute scroll')
          setTimeout(() => 
          goToComponent(IngredientsRef)
          , 0)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleSubmit() {
    setSearch(input)
  }

  return (
    <div className="app">
      <div ref={SearchRef} className="search">
        <div className="title">
          <p>{title}</p>
          <div className="bulb"></div>
        </div>
        <input
          type="text"
          onChange={(event) => handleInput(event)}
          value={input}
        />
        <div className="buttonContainer">
          <button onClick={handleSubmit}>Search</button>
          <button onClick={() => goToComponent(IngredientsRef)}>Ingredients</button>
          <button onClick={() => goToComponent(NutritionRef)}>Nutrition Info</button>
        </div>
      </div>
      {ingredients.length > 0 ? (
        <div ref={IngredientsRef} className="results">
          <Ingredients
            title='Ingredients'
            content={ingredients}
            contentSource={ingredientsSource}
          />
          <button onClick={() => goToComponent(SearchRef)}>New search</button>
          <button onClick={() => goToComponent(NutritionRef)}>Nutrition Info</button>

        </div>
      ) : null}
      {nutrition.length > 0 ? (
        <div ref={NutritionRef} className="results">
          <Ingredients
            title='Nutrition Info'
            content={ingredients}
            contentSource={ingredientsSource}
          />
          <button onClick={() => goToComponent(SearchRef)}>New search</button>
          <button onClick={() => goToComponent(IngredientsRef)}>Ingredients</button>
        </div>
      ) : null}
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

- hide api keys 
- add home, about, contact us
*/
