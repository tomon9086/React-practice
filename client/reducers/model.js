const initState = {
	message: "Hello React!"
}

const Model = (state = initState, action) => {
	console.log("model.js", state)
	switch(action.type) {
		case "reflectMessage":
			return { message: action.message }
		default:
			return state
	}
}

module.exports = Model
