import React from "react";

export default (props) => (
    <div style={{
      border: '1px solid #333',
      marginBottom: '10px',
      padding: '20px',
      boxShadow: '0 4px 5px 0 rgba(0,0,0,0.14)',
      borderRadius: '5px'
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

