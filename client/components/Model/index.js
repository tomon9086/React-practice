const connect = require("react-redux").connect
const reflectMessage = require("../../actions").reflectMessage
const Model = require("./Model.jsx")

const mapStateToProps = (state) => {
	// console.log("Model.js", state)
	return state.model
}

const mapDispatchToProps = {
	reflectMessage: reflectMessage
}

module.exports = connect(
	mapStateToProps,
	mapDispatchToProps
)(Model)
