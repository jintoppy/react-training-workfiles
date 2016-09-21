var React = require('react');
var ReactDOM = require('react-dom');

var EmployeeRow = React.createClass({
	render: function(){
		var currEmployee = this.props.currEmployee;
		return (
				<tr>
						<td>{currEmployee.name}</td>
						<td>{currEmployee.empId}</td>
						<td><button onClick={this.props.onRowBtnClick.bind(null, currEmployee)}>View Details</button></td>
				</tr>
			)
	}
});


module.exports = EmployeeRow;
