import React from 'react';

class Nav extends React.Component {

	render() {
		return (
			<nav className="nav-bar">
				<div className="logo">
					You<br />Can<br />Do<br />It!
				</div>
				<div>
					Splurting out a little motivation when you need it
				</div>
				<div>
					<ul>
						<li>
							Contribute
						</li>
						<li>
							About
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;