import React from 'react';
import me from '../assets/me.jpg';

class About extends React.Component {
	render() {
		return (
			<div className="about-container">
				<h1>About Splurty</h1>
				<div className="about-splurty">
					Splurty was built by <a href="https://tylerbporter.com">Tyler Porter</a>. He is currently 
					attending Vanderbilt University's coding bootcamp and is embarking on a journey of 
					learning to code. He is eager to add to an already eclectic collection of skills! 
					<br /><br/>
					Splurty was originally a Ruby on Rails project turned ReactJS learning experience. Splurty started 
					out as Tyler's first foray into Ruby on Rails. He enjoyed it so much he decided to rebuild it as 
					a SPA web app using Ruby on Rails -- what he calls "Reactive Splurty".
				</div>
				<br /><br />
				<div className="learn-coding">
					If you want to learn how to code - start <a href="https://online.bootcampspot.com/">here</a>.
				</div>
				<img src={me} alt="Tyler Porter Profile Picture"></img>
				<h2 className="name">
					Tyler Porter
				</h2>
				<div className="about-me">
					Tyler Porter is a junior web developer by night and a technology sales representative by day. 
					He has always loved working with new technologies and is eager to make the jump to web development 
					after graduating from Vanderbilt's bootcamp in August. Currently, he is working on learning 
					full-stack web development and has experience with HTML/CSS/JS and is eager to pick up new skills 
					(<a href="https://github.com/pawptart/reactive-splurty">like learning Ruby on Rails and ReactJS 
					by building Splurty!)</a>
				</div>
			</div>
		);
	}
}

export default About;