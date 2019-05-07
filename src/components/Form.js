import React from 'react';

class Form extends React.Component {

	onSubmit(e) {
		e.preventDefault();
		const formData = {
			saying: this.saying,
			author: this.author
		};
		this.props.createQuote(formData);
	}

	render() {
		return (
			<div className="form-container">
				<h1>Add a new quote!</h1>
				<form className="quote-form"
					onSubmit={(e) => this.onSubmit(e)}
				>
					<input 
						className="author-field" 
						placeholder="Author..."
						ref={(input) => this.author = input}
					/>
					<textarea 
						className="saying-field" 
						placeholder="Saying..."
						ref={(input) => this.saying = input}
					>
					</textarea>
					<button 
						className="submit-button" 
					>
						Submit!
					</button>
				</form>
			</div>
		);
	}
}

export default Form;