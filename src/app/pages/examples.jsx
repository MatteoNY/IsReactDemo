const React = require('react');
const { Link } = require('react-router');

var Examples = (props) =>
	<div>
		<h1 className="text-center page-title">Examples</h1>
		<p>Here are a few example locations </p>
		<ol>
			<li>
				<Link to='/?location=New York'>New York</Link>
			</li>
			<li>
				<Link to='/?location=Huntington Beach, California'>Huntington Beach, CA</Link>
			</li>

		</ol>




	</div>

module.exports = Examples;