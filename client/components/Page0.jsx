const React = require("react")

const Hello = require("./Hello")
const Model = require("./Model")

class Page0 extends React.Component {
	render() {
		return (
			<div>
				<Hello who="John"></Hello>
				<Model />
			</div>
		)
	}
}

module.exports = Page0
