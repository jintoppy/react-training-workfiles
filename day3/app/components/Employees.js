var React = require('react');
var ReactDOM = require('react-dom');
var EmployeeRow = require('./EmployeeRow');
var EmployeeDetails = require('./EmployeeDetails');
import EmployeeStore from '../stores/EmployeeStore';
import AddEmployee  from './AddEmployee';
import EmployeeActions from '../actions/EmployeeActions';

var Employees = React.createClass({
	componentWillMount: function(){
		console.log('component Will Mount');
	},
	componentDidMount: function(){
		console.log('component Did Mount');
		EmployeeStore.addChangListener(this.onDataChange);
	},
	componentDidUpdate: function(){
		console.log('component Did Update');

	},
	componentWillUnMount: function(){
		EmployeeStore.removeChangeListener(this.onDataChange);	
	},
	onDataChange: function(){
		this.setState({
			employees: EmployeeStore.getEmployees()
		});
	},
	getInitialState: function(){
		return {
			employees: EmployeeStore.getEmployees(),
			selectedEmployee: null
		};
	},
	onAddEmployee: function(newEmp){
		EmployeeActions.addEmployee(newEmp);
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
