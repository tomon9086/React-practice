const initState = {
	count: 0
}

const counter = (state = initState, action) => {
	console.log("counter.js", state)
	switch(action.type) {
		case "increment":
			return { count: state.count + 1 }
		default:
			return state
	}
}

module.exports = counter
