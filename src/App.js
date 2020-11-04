import React from "react";
import './styles/root.scss';
import {Country} from './components/Country';
import {Town} from './components/Town';
import { format } from "prettier";

export default class App extends React.Component {
	constructor (props) {
		super(props);
		this.info = this.props.info;
	}

	render () {

		const style = {
			display: 'inline-block',
			border: '1px solid tomato',
			marginBottom: '10px'
		}

		return (
			<>
				<h1 style={style}> {this.info} </h1>
				<h2>{this.props.info}</h2>
				<p>Hard to get more minimal than this React app.</p>
				
				<div style={ {
					color: 'tomato'
				} }>
					<Country 
						info = {
							{
								countryName:'Canada', 
								population:'100500'
							}
							}/>
					<Town>
						Monreal	
					</Town>
				</div>
			</>
		);
	}
}

