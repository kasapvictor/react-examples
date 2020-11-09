import React from "react";

export default (props) => (
    <div>
      <h3>{props.name}</h3>
      <ul>
        <li>Year: {props.year}</li>
        <li>Color: {props.color}</li>
      </ul>
      <button onClick={props.onChangeTitle}>Click</button>
    </div>
  )

