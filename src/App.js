import React, {Component} from "react";
import Car from './components/Car';
import './styles/root.scss';

export default class App extends Component {
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
		const cars = [...this.state.cars];

		car.name = name;
		cars[index] = car;
		this.setState({ cars });
	}

	deleteHandler (index) {
		const cars = this.state.cars.concat();

		cars.splice(index,1);

		this.setState({ cars })
	}

	componentWillMount () {
		console.log('will mount');
	}

	componentDidMount () {
		console.log('did mount');
	}

	render () {
		console.log('rendered');
		let cars = null;

		if (this.state.showCars) {
				cars = this.state.cars.map((car, index ) => {
					return <Car
						key={index}
						name={car.name}
						year={car.year}
						onChangeName={ event => this.onChangeName(event.target.value, index)}
						onDelete={this.deleteHandler.bind(this, index)}
					/>
				})
		}

		return (
			<div className="App">
				<div>
					<h1>{this.state.pageTitle}</h1>
					<button onClick={ this.toggleCars }>Show cars</button>
				</div>
				<div style={{
					width: 400,
					margin: 'auto',
					paddingTop: '20px'
				}}>
					{ cars }
				</div>
			</div>
		);
	}
}

