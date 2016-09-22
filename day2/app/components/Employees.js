var React = require('react');
var ReactDOM = require('react-dom');
var EmployeeRow = require('./EmployeeRow');
var EmployeeDetails = require('./EmployeeDetails');
import AddEmployee  from './AddEmployee';

var Employees = React.createClass({
	componentWillMount: function(){
		console.log('component Will Mount');
	},
	componentDidMount: function(){
		console.log('component Did Mount');
	},
	componentDidUpdate: function(){
		console.log('component Did Update');
	},
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
	onAddEmployee: function(newEmp){
		var employeesList = this.state.employees;
		employeesList.push(newEmp);
		this.setState({
			employees: employeesList
		});
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
						onRowBtnClick={this.onRowBtnClick} 
						currEmployee={currEmployee} />
				)
			trs.push(trEl);
		}
		return (
				<div className="employees-master">
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
				<AddEmployee 
					onAddEmployee={this.onAddEmployee} 
				/>
				</div>
			)
	}
});


module.exports = Employees;
