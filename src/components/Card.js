export default function Card(props) {
return (
  <div className="card">
    <div className="cardTitle">{props.title}: </div>
    <div className="cardContent">
      <p>{props.content}</p>
    </div>
    <div className="cardSource">
      <p>
      Source: {
        <a href="https://fdc.nal.usda.gov/fdc-app.html#/">{props.contentSource}</a>
      }
      </p>
    </div>
  </div>
)
}
