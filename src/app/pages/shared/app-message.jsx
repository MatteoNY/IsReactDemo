const React = require('react');

  // notes: states can change but props can't
  // container components have state presentaional do not

var AppMessage = (props) => {
   var { location, msg } = props;
    return (
      <div>
        <h1>Ciao! {location} You're temp: {msg}</h1>
      </div>
    );
	 
	 
}	

module.exports = AppMessage;