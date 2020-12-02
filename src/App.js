import { useState } from 'react';
import './App.css';

function App() {

  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const URL = 'YOUR API ENDPOINT';

  const handleInput = (input) => {

		switch (input.target.name) {
			case "email":
				setEmail(input.target.value);
				break;
			case "subject":
				setSubject(input.target.value);
				break;
			case "message":
				setMessage(input.target.value);
				break;
		}
  }
  
  const handleRequest = (e) => {
    e.preventDefault();

    const data = {
      subject,
      email,
      desc: message
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(data)
    };

    fetch(URL, options)
      .then(() => {
        console.log('form was sent');
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="App">
      <h2>Contact Form</h2>
      <form>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" onChange={handleInput}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleInput}/>
        <label htmlFor="message">Message</label>
        <textarea name="message" onChange={handleInput}/>
        <input type="submit" onClick={handleRequest} />
      </form>
    </div>
  );
}

export default App;
