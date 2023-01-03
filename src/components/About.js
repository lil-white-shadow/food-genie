export default function About() {
  const contentPara1 = "Have you ever wondered what goes in your food? Or how many calories are in a slice of that pizza you had for lunch?"

    const contentPara2 = "Say goodbye to your former self! We have brought Food Genie at your service and you are not limited to just 3 wishes. Search ingredients and nutrition info for any food!"

  return (
  <div className="card">
    <div className="cardTitle">About Food Genie</div>
    <div className="cardContent">
      <p>{contentPara1}</p>
      <p>{contentPara2}</p>
    </div>
    <div>
    </div>
  </div>
  ) 
}