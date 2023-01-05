export default function Nav(props) {
  return(
      <div className="nav">
        <button className="logo">FoodGenie</button>
        <button 
          style={props.display === 'about' ? {color: 'yellow', borderBottom: '4px solid'} : null}
          onClick={() => props.setDisplay(props.AboutRef)}>About</button>
        <button
          style={props.display === 'contact' ? {color: 'yellow', borderBottom: '4px solid'} : null}
          onClick={() => props.setDisplay(props.ContactRef)}>Contact</button>
      </div>
  )
}