import React from "react";
import './styles/root.scss';

export default class App extends React.Component {
	constructor (props) {
		super(props);
		this.info = this.props.info;
	}

	render () {
		return (
			<>
				<h1>{this.info}</h1>
				<p>Hard to get more minimal than this React app.</p>
			</>
		);
	}
}

