const Redux = require("redux")

const counter = require("./counter.js")

module.exports = Redux.combineReducers({
	counter
})
