const React = require("react")
const connect = require("react-redux").connect

const reflectMessage = require("../../actions").reflectMessage

class Model extends React.Component {
	render() {
		let el
		return (
			<div>
				<p>{ this.props.message }</p>
				<p><input type="input" ref={ (node) => { el = node } } value={ this.props.message } onChange={ () => {
					this.props.dispatch(reflectMessage(el.value))
				} } /></p>
			</div>
		)
	}
}

module.exports = connect()(Model)
