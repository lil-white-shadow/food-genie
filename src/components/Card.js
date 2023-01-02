export default function Card(props) {
return (
  <div className="card">
    <h2>{props.title}: </h2>
    <div className="content">
      {props.content} 
      <a href={props.contentSource}>Read more</a>
    </div>
    <div>
    </div>
    <div className="source">
      <p>
      [Source: {props.contentSource.substring(0, props.contentSource.indexOf("com") + 3)}]
      </p>
    </div>
  </div>
)
}
