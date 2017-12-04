const React = require("react")

const style = require("./ProceedButton.css")

class ProceedButton extends React.Component {
	render() {
		return (
			<div className={ style.outsideContainer }>
				<div className={ style.insideContainer }>
					<div className={ style.back } >
						<div className={ style.sankaku }></div>
						<span className={ style.backText }>Back</span>
					</div>
				</div>
				<div className={ style.insideContainer }>
					<div className={ style.proceed } >
						<div className={ style.sankaku }></div>
						<span className={ style.proceedText }>Next</span>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = ProceedButton
