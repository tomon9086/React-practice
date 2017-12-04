const React = require("react")
const connect = require("react-redux").connect

const styles = require("./Counter.css")

const increment = require("../actions").increment

class Counter extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className={ styles.container }>
				<div className={ styles.display }>{ this.props.count }</div>
				<div className={ styles.button } onClick={ () => {
					// console.log("Counter.jsx", this.props)
					this.props.dispatch(increment())
				} }>あああ</div>
			</div>
		)
	}
}

module.exports = connect()(Counter)
