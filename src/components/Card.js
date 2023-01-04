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
    </div>
    <div>
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
