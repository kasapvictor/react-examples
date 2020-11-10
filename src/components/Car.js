import React from "react";
import Radium from 'radium';
import './Car.scss';

const Car = (props) => {
  const inputClasses = ['input'];

  if (props.name !== '') {
    inputClasses.push('green');
  } else {
    inputClasses.push('red');
  }

  if (props.name.length > 4) {
    inputClasses.push('bold');
  }

  const style = {
    border: '1px solid #333',
    boxShadow: '0 4px 5px o rgba(0,0,0,.14)',
    ':hover': {
      border: '1px solid tomato',
      boxShadow: '0 4px 5px o rgba(0,0,0,.25)',
      cursor: 'pointer'
    }
  }

  return (
    <div className="Car" style={style}>
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


export default Radium(Car);