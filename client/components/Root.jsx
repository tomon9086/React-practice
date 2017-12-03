const React = require("react")

const style = require("./Root.css")

const Hello = require("./Hello.jsx")
const Counter = require("../containers/Counter.js")

class Root extends React.Component {
	render() {
		return (
			<div className={ style.container }>
				<div className={ style.header }><h3>React Practice</h3></div>
				<div className={ style.content }>
					<Hello />
					<Counter />
				</div>
				<div className={ style.footer }>
					
					<div className={ style.copyright }>© 2017 <a href="https://github.com/tomon9086/React-practice" target="_blank">tomon9086</a></div>
				</div>
			</div>
		)
	}
}

module.exports = Root
