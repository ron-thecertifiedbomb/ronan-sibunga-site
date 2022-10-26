import React from "react";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import "../Contact/Contact.css";

const Contact = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setinputEmail] = useState("");
  const [inputMessage, setinputMessage] = useState("");

  const handleName = (event) => {
    setInputName(event.target.value);
  };

  const handleEmail = (event) => {
    setinputEmail(event.target.value);
  };
  const handleMessage= (event) => {
    setinputMessage(event.target.value);
  };

  const handleClick = () => {
    // 👇️ clear input value
    setInputName("");
    setinputEmail("");
    setinputMessage("");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k3j2gdc",
        "template_qotkwgk",
        form.current,
        "rdTY6zpAKnKZlakhm"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
          handleClick();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-page-section" id="contactpage">
      <div className="form-wrapper">
        <h1>Contact Me</h1>

        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Name (required)"
            required
            onChange={handleName}
            value={inputName}
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Email (required)"
            required
            onChange={handleEmail}
            value={inputEmail}
          />
          <label>Message</label>
          <textarea
          type="text"
            name="message"
            placeholder="Message (required)"
            required
            onChange={handleMessage}
            value={inputMessage}
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;