import React, { useState } from "react";
import { validateEmail } from "../../../utils/helpers";

import "./ContactMe.css";

function ContactMe() {
  // set up states for fields
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!userName) {
      setErrorMessage("Please enter your name");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }
    if (!message) {
      setErrorMessage(
        "Please enter a message, I'm eager to hear what you have to say!"
      );
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  };

  return (
    <div className="formContainer">
      <p>{userName ? `Hello ${userName}!` : <>&nbsp;</>}</p>
      <form className="form">
        <div className="labelSet">
          <label htmlFor="userName">Your name:</label>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="username"
          />
        </div>
        <div className="labelSet">
          <label htmlFor="email">Your email:</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
        </div>
        <label htmlFor="message">Please enter a message for me:</label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
          rows="4"
        ></textarea>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      <p className="errorText">{errorMessage ? errorMessage : <>&nbsp;</>}</p>
    </div>
  );
}

export default ContactMe;
