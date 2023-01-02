export default function Ingredients(props) {
return (
  <div className="ingredients">
    <h2>Ingredients: </h2>
    <div className="sentence">
      {props.ingredients} 
      <a href={props.ingredientsSource}>Read more</a>
    </div>
    <div>
    </div>
    <div className="source">
      <p>
      [Source: {props.ingredientsSource.substring(0, props.ingredientsSource.indexOf("com") + 3)}]
      </p>
    </div> 
  </div>
)
}
