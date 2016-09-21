var React = require('react');
var ReactDOM = require('react-dom');
var EmployeeRow = require('./EmployeeRow');
var EmployeeDetails = require('./EmployeeDetails');

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
			],
			selectedEmployee: null
		};
	},
	onRowBtnClick: function(emp){
		this.setState({
			selectedEmployee: emp
		});
	},
	render: function(){
		var trs = [];
		for(var i=0; i<this.state.employees.length;i++){
			var currEmployee =  this.state.employees[i];
			var trEl = (
					<EmployeeRow 
						key={i} 
						onRowBtnClick={this.onRowBtnClick} currEmployee={currEmployee} />
				)
			trs.push(trEl);
		}
		return (
				<div>
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
				<EmployeeDetails emp={this.state.selectedEmployee}/>
				</div>
			)
	}
});


module.exports = Employees;
