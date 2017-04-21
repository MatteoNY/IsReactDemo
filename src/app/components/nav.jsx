const React = require('react');
const { Link, IndexLink } = require('react-router');


var Nav = React.createClass({

	onSearch: function (e) {
		e.preventDefault();
		
		var location = this.refs.search.value;
		var encodedLocation = encodeURIComponent(location);

	//	console.log("waiting... to react...", location);

		if (location.length > 0) {
			this.refs.search.value = '';
			window.location.hash = '#/?location=' + encodedLocation;

			//console.log("waiting... to react...", window.location.hash);
		}
	},
	

	render: function () {
	
		return (
			<div>
				<div className="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
					<button className="menu-icon" type="button" data-toggle="example-menu"></button>
					<div className="title-bar-title">Menu</div>
				</div>
				<div className="top-bar" id="example-menu">
					<div className="top-bar-left">
						<ul className="dropdown menu" data-dropdown-menu>
							<li className="menu-text">M.Carbone isReact?</li>
							<li>
								<IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Weather </IndexLink>
							</li>
							<li>
								<Link to="about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}> About </Link>
							</li>
							<li>
								<Link to="examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}> Examples </Link>
							</li>
						</ul>
					</div>
					<div className="top-bar-right">
						<form onSubmit={this.onSearch}>

							<ul className="menu">
								<li><input type="search" ref="search" placeholder="Search weather by city" /></li>
								<li><button type="submit" className="button" >Search</button></li>
							</ul>
						</form>
					</div>
				</div>
			</div>
		);
	}

});



module.exports = Nav;

