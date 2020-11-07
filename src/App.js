import React from "react";
import Car from './components/Car';
import './styles/root.scss';

export default class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = { }
	}

	render () {
		return (
			<div className="App">
				<h1>Hello!</h1>
				<Car name='Ford Mustang' year={1984} color='red'>
					<p>Description: Lorem ipsum dolor sit amet.</p>
				</Car>
			</div>
		);
	}
}

