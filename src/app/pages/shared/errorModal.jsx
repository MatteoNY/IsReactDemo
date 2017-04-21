const React = require('react');

const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({

    getDefaultProps: function () {
        return {
            title: 'Error'
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired

    },
    componentDidMount: function () {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();

        var { title, message } = this.props;
         var modalMarkup = (

            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h1>{title}</h1>
                <p className="lead">{message}</p>

                <button className="button hallow" data-close="" aria-label="Close modal" type="button">
                    OK
                </button>
            </div>
        );
        var $modal = $(ReactDOMServer.renderToString(modalMarkup) );
        $(ReactDOM.findDOMNode(this)).html;

    },

    render: function () {
        

        return (
            <div>
                </div>
        );

       
    }

});

module.exports = ErrorModal;


