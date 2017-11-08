const React = require("react")
const ReactDOM = require("react-dom")
const Redux = require("redux")
const Provider = require("react-redux").Provider

const Root = require("./components/Root.jsx")
const reducer = require("./reducers")
const store = Redux.createStore(reducer)

ReactDOM.render(
	<Provider store={ store }>
		<Root />
	</Provider>,
	document.getElementById("root")
)
