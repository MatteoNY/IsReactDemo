const React = require('react');
const Nav = require('nav');

// container component!!!!
var Main = (props) => {
	 
		return (

			<div>
			 <Nav/>
			 <h2>Main</h2>
			 {props.children}
			 			
			</div>
			);
}	 

module.exports = Main;