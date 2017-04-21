const React = require('react');

  // notes: states can change but props can't
  // container components have state presentaional do not

var AppMessage = (props) => {
   var { location, msg } = props;
    return (
      <div>
        <h2 className="text-center">Ciao! {location} You're temp: {msg}</h2>
      </div>
    );
	 
	 
}	

module.exports = AppMessage;