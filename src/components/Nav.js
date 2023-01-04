export default function Nav(props) {
  let length = props.search.length
  return(
      length === 0 ? 
      <div className="nav">
          <button onClick={() => props.goToComponent(props.AboutRef)}>About</button>
          <button onClick={() => props.goToComponent(props.ContactRef)}>Contact</button>
        </div>
        : 
        <div className="nav">
        <button className="logo">FoodGenie</button>
        <button onClick={() => props.goToComponent(props.AboutRef)}>About</button>
        <button onClick={() => props.goToComponent(props.ContactRef)}>Contact</button>
      </div>
  )
}