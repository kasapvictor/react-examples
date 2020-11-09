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

	handleInput = (event) => {
		this.changeTitleHandler(event.target.value);
	}

	render () {
		return (
			<div className="App">
				<div>
					<h1>{this.state.pageTitle}</h1>
					<input type="text" onChange={this.handleInput}/>
					<button onClick={this.changeTitleHandler.bind(this, '_changed_')}>Change title</button>
				</div>

				{ this.state.cars.map((car, index) => {
						return <Car
										key={index}
										name={car.name}
										year={car.year}
										onChangeTitle={ () => this.changeTitleHandler(car.name)}
									/>
					})
				}
			</div>
		);
	}
}

