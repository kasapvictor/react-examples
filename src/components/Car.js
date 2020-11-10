import React from "react";
import './Car.css';

export default (props) => {
  const inputClasses = ['input'];

  if (props.name !== '') {
    inputClasses.push('green');
  } else {
    inputClasses.push('red');
  }

  if (props.name.length > 4) {
    inputClasses.push('bold');
  }

  return (
    <div className="Car">
      <h3>{ props.name }</h3>
      <ul>
        <li>Year: { props.year }</li>
        <li>Color: { props.color }</li>
      </ul>
      <input
        type="text"
        onChange={ props.onChangeName }
        value={ props.name }
        className={inputClasses.join(' ')}
      />
      <button onClick={ props.onDelete }>Delete</button>
    </div>
  )
}
