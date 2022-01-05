"use strict";

var appRoot = document.getElementById("app");

var info = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of a computer",
	option: []
};

var formOnSubmit = function formOnSubmit(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;

	if (option) {
		info.option.push(option);
		e.target.elements.option.value = "";
		runderForm();
	}
};

var remove = function remove() {
	info.option = [];
	runderForm();
};

var pick = function pick() {

	var randomNum = Math.floor(Math.random() * info.option.length);
	var option = info.option[randomNum];
	alert(option);
};

var runderForm = function runderForm() {

	var templete = React.createElement(
		"div",
		null,
		React.createElement(
			"h2",
			null,
			info.title ? info.title : "anonymous"
		),
		React.createElement(
			"p",
			null,
			info.subtitle
		),
		React.createElement(
			"p",
			null,
			info.option.length > 0 ? "Here your options" : "No options"
		),
		React.createElement(
			"p",
			null,
			info.option.length
		),
		React.createElement(
			"ol",
			null,
			info.option.map(function (option) {
				return React.createElement(
					"li",
					{ key: option },
					option
				);
			})
		),
		React.createElement(
			"form",
			{ onSubmit: formOnSubmit },
			React.createElement("input", { type: "text", name: "option" }),
			React.createElement(
				"button",
				null,
				"Add Option"
			)
		),
		React.createElement(
			"button",
			{ onClick: remove },
			"remove All"
		),
		React.createElement(
			"button",
			{ disabled: info.option.length === 0, onClick: pick },
			"pick"
		)
	);

	ReactDOM.render(templete, appRoot);
};

runderForm();
