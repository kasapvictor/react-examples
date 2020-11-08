import React from "react";
import Car from './components/Car';
import './styles/root.scss';

export default class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			cars: [
				{ name: 'Ford', 	year: 1984 },
				{ name: 'Audi', 	year: 2016 },
				{ name: 'Mazda', 	year: 2010 }
			],
			pageTitle: 'My cars'
		}
	}

	changeTitleHandler = (newTitle) => {
		this.setState({
			pageTitle: newTitle
		});
	}

	render () {
		const cars = this.state.cars;
		return (
			<div className="App">
				<div>
					<h1>{this.state.pageTitle}</h1>
					<button onClick={this.changeTitleHandler.bind(this, '_changed_')}>Change title</button>
				</div>

				<Car
					name={cars[0].name}
					year={cars[0].year}
					onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
				/>
				<Car
					name={cars[1].name}
					year={cars[1].year}
					onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
				/>
				<Car
					name={cars[2].name}
					year={cars[2].year}
					onChangeTitle={this.changeTitleHandler.bind(this, cars[2].name)}
				/>

			</div>
		);
	}
}

