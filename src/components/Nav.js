export default function Nav(props) {
  return(
      <div className="nav">
        <button className="logo">FoodGenie</button>
        <button onClick={() => props.goToComponent(props.AboutRef)}>About</button>
        <button onClick={() => props.goToComponent(props.ContactRef)}>Contact</button>
      </div>
  )
}