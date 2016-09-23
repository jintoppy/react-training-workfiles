import React from 'react';
import EmployeeStore from '../stores/EmployeeStore';

class EmployeeCount extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			employees: EmployeeStore.getEmployees()
		}
	}
	componentDidMount(){
		EmployeeStore.addChangListener(this.onDataChange.bind(this));
	}
	componentWillUnMount(){
		EmployeeStore.removeChangeListener(this.onDataChange.bind(this));	
	}
	onDataChange(){
		this.setState({
			employees: EmployeeStore.getEmployees()
		});
	}
	render(){
		var myStyle = {
			color: 'red',
			fontSize: '15px'
		};
		return (
				<span style={myStyle}>Count is {this.state.employees.length}</span>
			)
	}
}

export default EmployeeCount