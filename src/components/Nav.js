export default function Nav(props) {
  return(
      <div className="nav">
        <button className="logo">FoodGenie</button>
        <button onClick={() => props.setDisplay(props.AboutRef)}>About</button>
        <button onClick={() => props.setDisplay(props.ContactRef)}>Contact</button>
      </div>
  )
}