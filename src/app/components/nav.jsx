const React = require('react');
const { Link, IndexLink } = require('react-router'); 

// nav component!!!!
var Nav = (props) => {
		return (
			<div>
			  <span>M.Carbone isReact demo </span>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather </IndexLink> |
              <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link>  |
              <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Examples </Link> 
			 {/* comment */}			
			</div>
		);
}	


module.exports = Nav;