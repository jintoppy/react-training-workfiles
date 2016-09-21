var React = require('react');
var ReactDOM = require('react-dom');

var EmployeeDetails = React.createClass({
	render: function(){
		var user;
		if(this.props.emp){
			user = <h1>{this.props.emp.name}</h1>
		}
		return (
				<div>Employee Detail
					{user}
				</div>
			)
	}
});


module.exports = EmployeeDetails;
