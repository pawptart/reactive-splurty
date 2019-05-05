import React from 'react';

class Form extends React.Component {
	render() {
		
		const { toggleShowForm } = this.props;

		return (
			<div className="form-container">
				<h1>Add a new quote!</h1>
				<input className="author-field" placeholder="Author..."/>
				<textarea className="saying-field" placeholder="Saying..."></textarea>
				<button 
					className="submit-button" 
					onClick={() => toggleShowForm()}
				>
					Submit!
				</button>
			</div>
		);
	}
}

export default Form;