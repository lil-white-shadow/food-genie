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
  const [ingredients, setIngredients] = useState("");
  const [nutrition, setNutrition] = useState("");
  const [inputError, setInputError] = useState(false);
  
  const [displayAbout, setDisplayAbout] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);
  
  const SearchRef = useRef()
  const IngredientsRef = useRef()
  const NutritionRef = useRef()
  const AboutRef = useRef()
  const ContactRef = useRef()

  function goToComponent(ref) {
    if(ref === SearchRef) {
      setSearch('')
      setIngredients('')
      setNutrition('')
    }
    if(!inputError && ref.current !== undefined) {
      ref.current.scrollIntoView({ behavior: 'auto' })
    }
  }


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
        .then((response) => {
          if(response.totalHits > 0) {
            setInputError(false);

            if(response.foods[0].ingredients) {
              let receivedIngredients = response.foods[0].ingredients.toLowerCase();
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
          } else {
            setInputError(true);
            setIngredients('');
            setNutrition('');
          }
        })
        .then(() => {
            if(!inputError) {
              setTimeout(() => 
                goToComponent(IngredientsRef)
              , 0)
            }
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  function handleInput(event) {
    setInput(event.target.value);
    setInputError(false);
  }

  function handleSubmit() {
    setSearch(input);
    setInput('');
  }

  return (
    <div className="app">
      {
        search !== "" ? 
        <Nav className="nav" goToComponent={goToComponent} AboutRef={AboutRef} ContactRef={ContactRef}/>
        : null
      }
      <div ref={SearchRef} className="search">
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="inputContainer">
          <input
            type="text"
            onChange={(event) => handleInput(event)}
            value={input}
          />
        </div>
        {
          inputError ? 
          <p className="inputErrorMessage">Please check spelling or try searching a different item.</p>
          : null
        }
        <div className="buttonContainer">
          <button onClick={handleSubmit} disabled={input === '' ? true : false} className={input === '' ? 'disabled' : null}>Search</button>
          <button onClick={() => goToComponent(IngredientsRef)} disabled={input === '' ? true : false} className={input === '' ? 'disabled' : null}>I'm feeling hungry!</button>
        </div>
      </div>
      {ingredients.length > 0 ? (
        <div ref={IngredientsRef} className="results">
          <Card
            title='INGREDIENTS'
            search={search}
            content={ingredients}
            contentSource={source}
          />
          <button onClick={() => goToComponent(SearchRef)}>New search</button>
          <button onClick={() => goToComponent(NutritionRef)}>See Nutrition</button>

        </div>
      ) : null}
      {nutrition.length > 0 ? (
        <div ref={NutritionRef} className="results">
          <Card
            title='NUTRITION'
            content={nutrition}
            contentSource={source}
          />
          <button onClick={() => goToComponent(SearchRef)}>New search</button>
          <button onClick={() => goToComponent(IngredientsRef)}>See Ingredients</button>
        </div>
      ) : null}
      <div ref={AboutRef} className="results">
        <About title={title}/>
      </div>
      <div ref={ContactRef} className="results">
        <Contact title={title}/>
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
