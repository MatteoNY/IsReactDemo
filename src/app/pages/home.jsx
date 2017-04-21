const React = require('react');

const AppForm = require('appform');
const AppMsg = require('./shared/app-message');
const Services = require('../services/api');

// container component!!!!
var Home = React.createClass({

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

	render: function () {
		var { isLoading, location, msg } = this.state;

		function renderMessage() {

			if (isLoading) {
				return <h3 className="text-center">Loading... </h3>;
			} else if (msg && location) {
				return <AppMsg location={location} msg={msg} />;
			}
		}

		return (

			<div>
				<h1 className="text-center">Get Weather</h1>
				<AppForm onSearch={this.handleSearch} />
				<div>
					{renderMessage()}
				</div>
				{/* jsx comment */}

			</div>
		);
	}

});

module.exports = Home;