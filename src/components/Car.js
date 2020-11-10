import React from "react";
import './Car.css';

export default (props) => (
    <div className="Car">
      <h3>{props.name}</h3>
      <ul>
        <li>Year: {props.year}</li>
        <li>Color: {props.color}</li>
      </ul>
      <input type="text" onChange={props.onChangeName} value={props.name}/>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )

