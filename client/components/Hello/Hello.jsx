const React = require("react")
const connect = require("react-redux").connect

const style = require("./Hello.css")

const reverseMessage = require("../../actions").reverseMessage

class Hello extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<p>{ this.props.message } { this.props.who }!</p>
				<p><button onClick={ () => {
					// console.log("Hello.jsx", this.props)
					this.props.dispatch(reverseMessage())
				} }>Reverse Message</button></p>
			</div>
		)
	}
}

module.exports = connect()(Hello)
