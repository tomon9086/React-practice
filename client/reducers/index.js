const Redux = require("redux")

const counter = require("./counter.js")
const hello = require("./hello.js")
const model = require("./model.js")

module.exports = Redux.combineReducers({
	counter,
	hello,
	model
})
