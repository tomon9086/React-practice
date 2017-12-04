const actions = {
	increment: () => ({
		type: "increment"
	}),
	reverseMessage: () => ({
		type: "reverseMessage"
	}),
	reflectMessage: (message) => ({
		type: "reflectMessage",
		message: message
	})
}

module.exports = actions
