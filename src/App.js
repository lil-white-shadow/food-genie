import { useEffect, useState, useRef } from "react";
import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  const title = "FoodGenie";
  const source = "U.S. Dept. of Agriculture";

  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const SearchRef = useRef()
  const IngredientsRef = useRef()
  const NutritionRef = useRef()
  const AboutRef = useRef()
  const ContactRef = useRef()

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

  useEffect(() => {
    if (search !== "") {
      let key = "rO88pi0us05QoIvMAigT0J7ZWLUiSDKdeq1owQac";
  
      let endpoint =
        "https://api.nal.usda.gov/fdc/v1/foods/search?" +
        "api_key=" +
        key + 
        "&query=" +
        search +
        "&dataType=Branded,Foundation,Survey%20%28FNDDS%29,SR%20Legacy&pageSize=1"
  
      fetch(endpoint)
        .then((response) => response.json())
        // .then(response => console.log(response.foods[0].ingredients))
        .then((response) => {
          if(response.foods[0].ingredients) {
            let receivedIngredients = response.foods[0].ingredients;
            setIngredients(receivedIngredients);
          } else {
            setIngredients("Oops! We were not able to find ingredients for " + search + ". Please try searching another item.")
          }
          if(response.foods[0].foodNutrients) {
            let receivedNutrition = response.foods[0].foodNutrients;
            setNutrition(receivedNutrition.map(nutrient => 
              (
                <div key={nutrient.nutrientName}>
                  {nutrient.nutrientName + ": " + nutrient.value + " " + nutrient.unitName.toLowerCase()}
                </div>
              )
            ));
          } else {
            setNutrition("Oops! We were not able to find nutrition information for " + search + ". Please try searching another item.")
          }
        })
        .then(() => {
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
      <Nav className="nav" search={search} goToComponent={goToComponent} AboutRef={AboutRef} ContactRef={ContactRef}/>
      <div className="search">
        <div className="title">
          <p>{title}</p>
          {/* <div className="bulb"></div> */}
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
          <Card
            title='Ingredients'
            search={search}
            content={ingredients}
            contentSource={source}
          />
          <button onClick={() => goToComponent(SearchRef)}>New search</button>
          <button onClick={() => goToComponent(NutritionRef)}>Nutrition Info</button>

        </div>
      ) : null}
      {nutrition.length > 0 ? (
        <div ref={NutritionRef} className="results">
          <Card
            title='Nutrition Info'
            content={nutrition}
            contentSource={source}
          />
          <button onClick={() => goToComponent(SearchRef)}>New search</button>
          <button onClick={() => goToComponent(IngredientsRef)}>Ingredients</button>
        </div>
      ) : null}
      <div ref={AboutRef} className="results">
        <About />
      </div>
      <div ref={ContactRef} className="results">
        <Contact />
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

- hide api keys 
- add home, about, contact us
*/
