const initState = {
	message: "Hello"
}

const hello = (state = initState, action) => {
	console.log("hello.js", state)
	switch(action.type) {
		case "reverseMessage":
			return { message: state.message.split("").reverse().join("") }
		default:
			return state
	}
}

module.exports = hello
