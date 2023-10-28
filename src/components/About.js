import React from "react";
import Links from "./links"; // Update the import statement

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.github} linkedin={props.linkedin} />
    </div> // Add the closing tag for the <div> element
  );
}

export default About;