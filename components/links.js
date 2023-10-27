import React from "react";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <a href={props.github}>{props.github}</a>
      <a href={props.linkdin}>{props.linkdin}</a>
    </div>
  );
}

export default Links;
