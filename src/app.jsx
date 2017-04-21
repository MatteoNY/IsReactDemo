const React = require('react');
const ReactDOM = require('react-dom');

// ES6 destructuring 
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const Main = require('main');
const Home = require('home');
const About = require('about'); 
const Examples = require('examples');

// load foundation
require ('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// app.css
require ('style-loader!css-loader!appStyles');

// var objOne = {
// 	name: 'Matteo',
// 	location: 'NYC'
// };

// var objTwo = {
// 	age: '25',
// 	...objOne
// };

// console.log("spread obj", objTwo);
// const { name, location } = objOne;
// console.log("name? ", name)
// console.log("loc? ", location)


ReactDOM.render(
	<Router history={hashHistory}>
	<Route path="/" component={Main}> 
		<Route path="about" component={About}/>
		<Route path="examples" component={Examples}/>
			<IndexRoute component={Home}/>
	</Route>
	</Router>,
	document.getElementById('app')


);
