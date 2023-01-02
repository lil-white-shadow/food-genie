export default function Nav(props) {
  return(
    <div className="nav">
      <button onClick={() => props.goToComponent(props.IngredientsRef)}>About</button>
      <button onClick={() => props.goToComponent(props.NutritionRef)}>Contact</button>
    </div>
  )
}