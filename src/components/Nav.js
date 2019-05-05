import React from 'react';

class Nav extends React.Component {

	render() {

		const { toggleShowForm } = this.props;

		return (
			<div className="nav-container">
				<nav className="nav-bar">				
					<div className="circle">
						You<br />Can<br />Do It!
					</div>				
					<div className="slogan">
						Splurting out a little motivation when you need it
					</div>
					<div>
						<ul className="nav-link-container">
							<li 
								className="nav-link" 
								onClick={() => toggleShowForm()}
							>
								Contribute
							</li>
							<li className="nav-link">
								About
							</li>
						</ul>
					</div>				
				</nav>
				<div className="bottom-border"></div>
			</div>
		);
	}
}

export default Nav;