const React = require('react');

//state less

var About = (props) =>
	<div>
		<h1 className="text-center">About</h1>
		<p>Learning example by M.Carbone</p>
		<p>Based on the Complete React Web App Developer course. Below is a list of tools used in the app.</p>
		<ul>
			<li>
				Facebook react js
			</li>
			<li>
				<a href="http://openweathermap.org"> Open Weather Map</a>
			</li>
		</ul>


	</div>
module.exports = About;