import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let formInputs = {
    "name": name,
    "email": email,
    "message": message,
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(formInputs);
    e.target.reset();
  }
  return (
  <div className="card">
    <div className="cardTitle">Contact Food Genie</div>
    <div className="cardContent">
      <p>Stay in touch. Fill out below details and we will reach out to you with a response.</p>
      <form onSubmit={onSubmit} noValidate>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder='Enter your name' onChange={(e) => setName(e.target.value)}/>
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/>
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea type="textarea" name="email" id="email" placeholder='Your message' onChange={(e) => setMessage(e.target.value)}/>
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div>
    </div>
  </div>
  ) 
}