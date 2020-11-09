import React from "react";

export default (props) => (
    <div style={{
      border: '1px solid #333',
      marginBottom: '10px'
    }}>
      <h3>{props.name}</h3>
      <ul>
        <li>Year: {props.year}</li>
        <li>Color: {props.color}</li>
      </ul>
      <input type="text" onChange={props.onChangeName} value={props.name}/>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )

