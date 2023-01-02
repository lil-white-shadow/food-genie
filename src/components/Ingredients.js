export default function Ingredients(props) {
return (
  <div>
    <h2>Ingredients: </h2>
    <div>
      {props.ingredients} 
      &nbsp;&nbsp;
      <a href={props.ingredientsSource}>Read more</a>
      <br />
      <p className="source">
      [Source: {props.ingredientsSource.substring(0, props.ingredientsSource.indexOf("com") + 3)}]
      </p>
    </div>
  </div>
)
}
