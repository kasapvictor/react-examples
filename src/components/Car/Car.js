import React from "react";
import Radium from 'radium';
import classes from './Car.module.scss';

class Car extends React.Component {
  constructor (props) {
    super (props);
  }

  componentWillReceiveProps ( nextProps ) {
    console.log('componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate ( nextProps, nextState ) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate ( nextProps, nextState ) {
    console.log('componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate () {
    console.log('componentDidUpdate');
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
      <div className={classes.Car} style={style}>
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
      </div>
    )
  }
}

// export default Radium(Car);
export default Car;