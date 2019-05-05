import React from 'react';

class Quote extends React.Component {

	componentWillMount() {
		this.props.getQuote();
	}

	render() {
		const { quote } = this.props;

		return (
			<div className="quote-container">
				<div className="quote-id">
					SPLURTY / No. { quote.id }  
				</div>
				<div className="quote-saying">
					{ quote.saying }
				</div>
				<div className="quote.author">
					- { quote.author }
				</div>				
			</div>
		);
	}

}

export default Quote;