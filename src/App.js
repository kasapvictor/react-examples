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
			pageTitle: 'My cars',
			showCars: false
		}
	}

	toggleCars = () => {
		this.setState( {showCars: !this.state.showCars} )
	}

	onChangeName = (name, index) => {
		const car = this.state.cars[index];
		car.name = name;
		const cars = [...this.state.cars];
		cars[index] = car;
		this.setState({ cars });
	}

	deleteHandler (index) {
		const cars = this.state.cars.concat();

		cars.splice(index,1);

		this.setState({ cars })
	}

	render () {
		return (
			<div className="App">
				<div>
					<h1>{this.state.pageTitle}</h1>

					<button onClick={ this.toggleCars }>Show cars</button>
				</div>

				{
					this.state.showCars
					? this.state.cars.map((car, index ) => {
						return <Car
										key={index}
										name={car.name}
										year={car.year}
										onChangeName={ event => this.onChangeName(event.target.value, index)}
										onDelete={this.deleteHandler.bind(this, index)}
									/>
					})
					: null
				}
			</div>
		);
	}
}

