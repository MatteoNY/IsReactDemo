const React = require('react');
const { Link, IndexLink } = require('react-router');


var Nav = React.createClass({

	getInitialState: function () {
		return {
			isLoading: false
		};
	},
	handleSearch: function (payload) {
		var self = this;

		this.setState({
			isLoading: true
		})

		//	Services.ciao (payload.location);

		Services.getTemp(payload.location).then(function (res) {
			self.setState({
				location: payload.location,
				msg: res,
				isLoading: false
			});
		}, function (err) {
			self.setState({
				isLoading: false
			})
			alert("Opps!!! error " + err);
		});

	},
	onSearch: function(e) {
		e.preventDefault();
		console.log ("waiting... to react...");
	},

	render: function () {
	//	var { isLoading, location, msg } = this.state;

		// function renderMessage() {

		// 	if (isLoading) {
		// 		return <h3>Loading... </h3>;
		// 	} else if (msg && location) {
		// 		return <AppMsg location={location} msg={msg} />;
		// 	}
		// }

		return (

			<article>
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
						<li><input type="search" placeholder="Search" /></li>
						<li><button type="submit" className="button">Search</button></li>
					</ul>
					</form>
				</div>
			</div>
			</article>
		);
	}

});



module.exports = Nav;

