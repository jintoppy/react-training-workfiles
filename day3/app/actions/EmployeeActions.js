import {dispatch} from '../dispatcher/AppDispatcher';
let EmployeeActions = {
	addEmployee: function(emp){
		dispatch({
			actionType: 'ADD_EMPLOYEE',
			item: emp
		});
	}
}

export default EmployeeActions;
