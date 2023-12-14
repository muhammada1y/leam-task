import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const collectData = async () => {
    try {
        const result = await fetch('http://localhost:2002/massage', {
            method: 'POST',
            body: JSON.stringify({ email, title, content: 'YourNonNullValueHere' }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        // handle result...
    } catch (error) {
        console.error('Error saving note:', error);
        // handle error...
    }
};


  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="contact">
        <div className="contactid">
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-phone"></i>+91 1387242785
          </p>
          <p>
            <i className="fas fa-envelope"></i>email: f1stmain601@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marked-alt"></i>location: Gilgit, Pakistan
          </p>
        

      </div>
      <div className="contactm">
        <h2>Write any message for Me! :</h2>

        <label>Your email:</label>
        <input className="inputbox" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter email" />
        <label>Title:</label>
        <input className="inputbox" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="title" />

        <label>Content:</label>
        <textarea
          name="content"
          value={message}
          onChange={handleInputChange}
        />
        <button onClick={collectData} className="buttonSup" type="button">
          Submit
        </button>
      </div>

     
    </div>
  );
};

export default Contact;
