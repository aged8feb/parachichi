import React from "react";
import "./App.css";
import profilePic from "./profile.jpg";

function App() {
  return (
<div className="App">
        <img src={profilePic} alt="My profile" width="200" />
        <h1>Aggie</h1>
        <p>Web Developer</p>
 
      <section style={{ marginBottom: '2rem'}}>
        <h2>About Me</h2>
        <p>
          I'm passionate web Developer with experience in building model responsive websites using React, HTML, CSS, and JavaScript.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Projects</h2>
        <ul>
          <li>Project Hebrews'</li>
          <li>Project HH</li>
          <li>Project Xuli</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: aged8feb@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/agnes-benedict</p>
      </section>
    </div>
  );
}

export default App