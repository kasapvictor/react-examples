import React from "react";

export const Country = ({info}) => {
	let a = 10;
	let b = 14;

	return (
			<div>
				<h3>Country: {info.countryName}</h3>
				<strong>{info.population}</strong>

				<h4>Number 1: {10 + 10}</h4>

				<h4>Number 2: {Math.round(Math.random()*100)}</h4>

				<div>{a-b}</div>
			</div>
	) 	
}

