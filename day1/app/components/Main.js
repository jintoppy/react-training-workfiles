var React = require('react');
var ReactDOM = require('react-dom');
var Employees = require('./Employees');

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<Employees />
			</div>
			)
	}
});


module.exports = Main;

