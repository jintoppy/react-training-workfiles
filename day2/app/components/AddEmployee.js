import React from 'react';
import ReactDOM from 'react-dom';

class AddEmployee extends React.Component{
	constructor(props){
		super(props);
	}
	onAdd(){
		let newEmployee = {};
		let nameInput = ReactDOM.findDOMNode(this.refs.name);
		let idInput = ReactDOM.findDOMNode(this.refs.empId);
		newEmployee = {
			name: nameInput.value,
			empId: idInput.value
		}
		this.props.onAddEmployee(newEmployee);
	}
	render(){

		return (<div>
				Add Employee 
				<div>
					<span>Name</span>	
					<input ref="name" type="text" />
				</div>
				<div>
					<span>Employee Id</span>	
					<input ref="empId" type="text" />

				</div>
				<div>
					<button onClick={this.onAdd.bind(this)}>Add Employee</button>
				</div>
			</div>)
	}
}

AddEmployee.propTypes = {
	onAddEmployee: React.PropTypes.func
};


export default AddEmployee;