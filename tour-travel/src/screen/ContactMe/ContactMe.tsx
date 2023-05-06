import React, { FormEvent, useState } from "react";
import "./ContactMe.css";
import { stat } from "fs";

const ContactMe: React.FC = () => {
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    comments: "",
  });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <div id="contactForm">
      <h1 className="contactmeHeading">Connect with me</h1>
      <div>
        <form className="contactMeForm" onSubmit={handleSubmit}>
          <label>
            Name :
            <input
              name="name"
              onChange={(event) => {
                console.log(event);
                setState({ ...state, name: event.target.value });
              }}
            />
          </label>
          <label>
            Phone:
            <input
              name="phone"
              onChange={(event) => {
                setState({ ...state, phone: event.target.value });
              }}
            />
          </label>
          <label>
            Email :
            <input
              name="email"
              onChange={(event) => {
                setState({ ...state, email: event.target.value });
              }}
            />
          </label>
          <label>
            fback :
            <input
              name="comments"
              onChange={(event) => {
                setState({ ...state, comments: event.target.value });
              }}
            />
          </label>
        </form>
      </div>
    </div>
  );
};
export default ContactMe;
