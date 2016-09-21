var React = require('react');
var ReactDOM = require('react-dom');
var EmployeeRow = require('./EmployeeRow');

var Employees = React.createClass({
	getInitialState: function(){
		return {
			employees: [
				{
					name: 'Manoj',
					empId: 112
				},
				{
					name: 'Sree',
					empId: 113
				}
			]
		};
	},
	render: function(){
		var trs = [];
		for(var i=0; i<this.state.employees.length;i++){
			var currEmployee =  this.state.employees[i];
			var trEl = (
					<tr>
						<td>{currEmployee.name}</td>
						<td>{currEmployee.empId}</td>
					</tr>
				)
			trs.push(trEl);
		}
		return (
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Employee Id</th>
							<th>View</th>
						</tr>
					</thead>
					<tbody>
						{trs}
					</tbody>
				</table>
			)
	}
});


module.exports = Employees;
