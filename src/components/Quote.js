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
					<span className="id-span">SPLURTY / No. { quote.id }</span> Here's the best user-generated <span className="underline">motivation</span> you can get! 
				</div>
				<div className="quote-saying">
					{ quote.saying }
				</div>
				<div className="quote-author">
					- { quote.author }
				</div>				
			</div>
		);
	}

}

export default Quote;