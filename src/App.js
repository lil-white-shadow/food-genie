import { useEffect, useState } from "react";
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
  
  const [display, setDisplay] = useState('search');

  useEffect(() => {
    if (search !== "") {
      let key = process.env.REACT_APP_USDA_API_KEY;
  
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
            setDisplay('ingredients');

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
        display !== 'search' ? 
        <Nav className="nav" setDisplay={setDisplay} AboutRef="about" ContactRef="contact"/>
        : null
      }
      {
        display === 'search' ?         
        <div className="search">
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
          <button onClick={() => setDisplay('ingredients')} disabled={input === '' ? true : false} className={input === '' ? 'disabled' : null}>I'm feeling hungry!</button>
        </div>
        </div>
        : null
      }
      {
        display === 'ingredients' ? 
        <div className="results">
          <Card
            title='INGREDIENTS'
            search={search}
            content={ingredients}
            contentSource={source}
          />
          <button onClick={() => setDisplay('search')}>Return to search</button>
          <button onClick={() => setDisplay('nutrition')}>See Nutrition</button>

        </div>
        : null}
      {
        display === 'nutrition' ? (
        <div className="results">
          <Card
            title='NUTRITION'
            content={nutrition}
            contentSource={source}
          />
          <button onClick={() => setDisplay('search')}>Return to search</button>
          <button onClick={() => setDisplay('ingredients')}>See Ingredients</button>
        </div>
      ) : null}
      {
        display === 'about' ?
        <div className="results">
          <About title={title}/>
          <button onClick={() => setDisplay('search')}>Return to search</button>
        </div>
        : null
      }
      {
        display === 'contact' ?
        <div className="results">
          <Contact title={title}/>
          <button onClick={() => setDisplay('search')}>Return to search</button>
        </div>
        : null
      }
    </div>
  );
}

/* 
Future additions:
- Routing for Results, About, Contact
- Near me - google map results for restaurants or stores
- Clip content for mobile with "Read more..."
*/
