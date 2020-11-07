import React from "react";

export default ({name, year, color, children}) => (
    <div>
      <h3>{name}</h3>
      <div> {children} </div>
      <ul>
        <li>Year: {year}</li>
        <li>Color: {color}</li>
      </ul>

    </div>
  )

