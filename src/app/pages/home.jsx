const React = require('react');

const AppForm = require('appform');
const AppMsg = require('./shared/app-message');
const Services = require('../services/api');

const ErrorModal = require('./shared/errorModal');

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
			isLoading: true,
			errorMessage: undefined
		})

		//	Services.ciao (payload.location);

		Services.getTemp(payload.location).then(function (res) {
			console.log ("res? " + res);
			self.setState({
				location: payload.location,
				msg: res,
				isLoading: false
			});
		}, function (error) {

//console.log("~~~~~~ error: " + error);
			self.setState({
				isLoading: false,
				errorMessage: error.data.message
			})
				
		});

	},

	render: function () {
		var { isLoading, location, msg, errorMessage } = this.state;

		console.log ("errorMessage " + errorMessage);

		function renderMessage() {

			if (isLoading) {
				return <h3 className="text-center">Updating... </h3>;
			} else if (msg && location) {
				return <AppMsg location={location} msg={msg} />;
			}
		}
		function renderError() {
			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return (

			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<AppForm onSearch={this.handleSearch} />
				<div>
					{renderMessage()}
					{renderError()}
				</div>
				{/* jsx comment */}

			</div>
		);
	}

});

module.exports = Home;