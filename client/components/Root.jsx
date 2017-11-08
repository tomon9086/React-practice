const React = require("react")

const Hello = require("./Hello.jsx")
const Counter = require("../containers/Counter.js")

class Root extends React.Component {
	render() {
		return (
			<div>
				<Hello />
				<Counter />
			</div>
		)
	}
}

module.exports = Root
