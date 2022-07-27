import React from "react";
import { useState } from "react";
import axios from "axios";
import "../App.css";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const makeRequest = async () => {
    let request = await axios({
      method: "post",
      url: "https://server.meowform.xyz/form/anmolmalik2001@gmail.com&tohyo",
      data: {
        name,
        email,
        message
      }
    });
    if (request.status === 200) {
      alert("reponse saved");
    } else {
      alert("some error have occured");
    }
  };

  function isValid(email)
  {
      const regexEmail=/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

      return regexEmail.test(email)?1:0;
  }

  const submit = () => {
    if (name === "" || email === "" || message === "") {
      alert("you must fill all the feilds");
    } 
    else if(!isValid(email))
    {
        alert("Invalid Email");
    }else {
      makeRequest();
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    
    <div className="contact">
      <div className="contactInside">
      <h1>Fill the form to reach us ...</h1>
        <input className="contactContent"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input className="contactContent"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input className="contactContent"
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button className="contactContent" onClick={submit}> Submit</button>
      </div>
    </div>
  );
}
