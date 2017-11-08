const connect = require("react-redux").connect
const increment = require("../actions").increment
const Counter = require("../components/Counter.jsx")

// const mapStateToProps = (state) => ({
// 	count: state.count
// })
const mapStateToProps = (state) => {
	console.log("Counter.js", state)
	return state.counter
}

const mapDispatchToProps = {
	increment: increment
}

module.exports = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter)
