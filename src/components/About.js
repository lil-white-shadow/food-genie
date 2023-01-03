export default function About() {
  const content = "Have you ever wondered what goes in your food? Or how many calories are in a slice of that pizza you had for lunch? Our founders found themselves constantly trying to find answers to these questions. And then, Food Genie was created."

  return (
  <div className="card">
    <div className="cardTitle">About Food Genie</div>
    <div className="cardContent">
      <p>{content}</p>
    </div>
    <div>
    </div>
  </div>
  ) 
}