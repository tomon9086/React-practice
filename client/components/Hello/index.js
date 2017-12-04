const connect = require("react-redux").connect
const reverseMessage = require("../../actions").reverseMessage
const Hello = require("./Hello.jsx")

// const mapStateToProps = (state) => ({
// 	count: state.count
// })
const mapStateToProps = (state) => {
	// console.log("Hello.js", state)
	return state.hello
}

const mapDispatchToProps = {
	reverseMessage: reverseMessage
}

module.exports = connect(
	mapStateToProps,
	mapDispatchToProps
)(Hello)
