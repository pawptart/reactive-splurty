import React from 'react';

class Footer extends React.Component {	

	render() {

		const { getQuote } = this.props;
		
		return (
			<div className="footer-container">
				<button 
					className="more-button" 
					onClick={() => getQuote()}
				>
					This isn't enough, I need more
				</button>
				<div className="links">
					<div className="profile-link">
						Proudly hacked by <a href="https://tylerbporter.com">Tyler Porter</a>
					</div>
					<div className="course-link">
						Want to build your own Splurty Web App? - <a href="https://online.bootcampspot.com">Learn how to code here</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;