import React from 'react';

import cart from "../assets/cart.avif";
import "../styles/Contact.css";
 
function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4fd030fd-acd8-4ec7-a569-5807c701a73c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you for mailing Sam,  Submitted Successfully");
      event.target.reset();
      alert(data.message)
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <div className='contact'>
        <div className='leftSide'
        style={{ backgroundImage:  `url(${cart})`  }}></div>
    <div className='rightSide'>
      <h1>Contact me</h1>



      <form id="contact-form" method="POST" onSubmit={onSubmit}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
    </div>
    </div>
  )
}

export default Contact
