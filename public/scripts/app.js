"use strict";

var visibality = false;

var toggle = function toggle() {

	visibality = !visibality;
	runderr();
};

var runderr = function runderr() {
	var templete = React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			"Toggle Button"
		),
		React.createElement(
			"button",
			{ onClick: toggle },
			visibality ? "Don't click on me" : "Ohh.. hey there!"
		),
		visibality && React.createElement(
			"div",
			null,
			React.createElement(
				"p",
				null,
				"siuuuuuuuuuuuu"
			)
		)
	);
	ReactDOM.render(templete, document.getElementById("app"));
};

runderr();
