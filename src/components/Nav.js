import React from 'react';

class Nav extends React.Component {

	render() {

		const { toggleShowForm, toggleShowAbout, showForm, showAbout, goBack } = this.props;

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
							{ showAbout || showForm ?
								<li className="nav-link"
									onClick={() => goBack()}
								>
									Back
								</li>	
								: 		
								<React.Fragment>	
									<li 
										className="nav-link" 
										onClick={() => toggleShowForm()}
									>
										Contribute
									</li>
									<li 
										className="nav-link"
										onClick={() => toggleShowAbout()}
									>
										About
									</li>			
								</React.Fragment>						
							}
						</ul>
					</div>				
				</nav>
				<div className="bottom-border"></div>
			</div>
		);
	}
}

export default Nav;