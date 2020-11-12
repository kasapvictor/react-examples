import React from "react";
import classes from './Car.module.scss';
import withClass from '../hoc/withClass';

class Car extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    const inputClasses = [classes.input];

    if (this.props.name !== '') {
      inputClasses.push(classes.green);
    } else {
      inputClasses.push(classes.red);
    }

    if (this.props.name.length > 4) {
      inputClasses.push(classes.bold);
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
      <React.Fragment>
        <h3>{ this.props.name }</h3>
        <ul>
          <li>Year: { this.props.year }</li>
          <li>Color: { this.props.color }</li>
        </ul>
        <input
          type="text"
          onChange={ this.props.onChangeName }
          value={ this.props.name }
          className={inputClasses.join(' ')}
        />
        <button onClick={ this.props.onDelete }>Delete</button>
      </React.Fragment>
    )
  }
}

export default withClass(Car, classes.Car);