export default function Nav(props) {
  let length = props.search.length
  return(
      length === 0 ? 
      <div className="nav">
          <button onClick={() => props.goToComponent(props.IngredientsRef)}>About</button>
          <button onClick={() => props.goToComponent(props.NutritionRef)}>Contact</button>
        </div>
        : 
        <div className="nav">
        <div className="logo">Food Genie</div>
        <button onClick={() => props.goToComponent(props.IngredientsRef)}>About</button>
        <button onClick={() => props.goToComponent(props.NutritionRef)}>Contact</button>
      </div>
  )
}