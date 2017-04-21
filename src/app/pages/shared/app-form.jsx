const React = require('react');

//const AppMsg = require('./app-message');

var weatherAPIkey = 'a67f9de826788766fd485ca50e4e884f';
var msg = "ciao";
var AppForm = React.createClass({

	onFormSubmit: function (e) {
		e.preventDefault();

		var _refs = this.refs;
		var payload = {};
		//	var msg = "OK!!!!"


		if (_refs.location.value.length > 0) {
			payload.location = _refs.location.value;
			this.refs.location.value = '';

		// 	this.msg = "Warm today 65 degres low wind";
		//	updates.msg = this.msg; 	
	 
			//this.handleUpdate(updates);
			this.props.onSearch(payload);

		}

		

	},
	render: function () {
		//var location = this.state.location
		return (
			<form onSubmit={this.onFormSubmit}>
				<div>
					<input type="text" ref="location" placeholder="Enter city location" />
				</div>
				<div>
					<button type="submit" className="button expanded hollow"> Get Weather</button>
				</div>
		
			</form>
		);
	}

});

module.exports = AppForm;