export default function Card(props) {
return (
  <div className="card">
    <div className="cardTitle">{props.title}: </div>
    <div className="cardContent">
    {
      window.innerWidth < 767 ? 
      <p>
      {
        props.content.toLowerCase().replace(/\b(a|an|the|in|on|at|to|for|from|with|by|of|The|most|common|ingredients|also|dishes|are|ingredient|is|props.search)\b/gi, "").replace(props.search, '').replace('.',',').replace('...', '').replace(' and', ',').replace(props.search, '')
      }
      </p>
      : <p>{props.content}</p>
    }
      <a href={props.contentSource}>Read more</a>
    </div>
    <div>
    </div>
    <div className="cardSource">
      <p>
      Source: {props.contentSource.substring(0, props.contentSource.indexOf("com") + 3)}
      </p>
    </div>
  </div>
)
}
