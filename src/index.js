import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const info = 'Hello Dude!';

ReactDOM.render(
	<App info={info}/>,
	document.getElementById("root")
	);
