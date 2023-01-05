export default function About(props) {
  const contentPara1 = "Have you ever wondered what goes in your food? Or how many calories are in a slice of pizza that you had for lunch? Say goodbye to your former self! We have brought " + props.title + " at your service and you are not limited to just 3 wishes. Search ingredients and nutrition info for any number of food items!"

  const contentPara2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sed quam expedita laborum saepe maxime fugit dolor officiis unde nisi laudantium soluta ea dolore dolorem vero, laboriosam, rem adipisci velit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam voluptate laudantium cupiditate deserunt, maiores nulla sit omnis impedit praesentium incidunt cumque odit. Veritatis consequuntur eos corrupti quis. Iure, labore repellat."

  const contentPara3 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, illo. Soluta quos deserunt sapiente porro aut voluptatum iure facilis atque quam, id autem architecto ducimus, veniam repellat amet fugiat molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquid ipsa nesciunt veniam quam ipsam esse in id pariatur perferendis ea, est, porro ratione ducimus, totam laboriosam tenetur quidem dicta."

  return (
  <div className="card">
    <div className="cardTitle">About {props.title}</div>
    <div className="cardContent">
      <p>{contentPara1}</p>
      <p>{contentPara2}</p>
      <p>{contentPara3}</p>
    </div>
    <div>
    </div>
  </div>
  ) 
}