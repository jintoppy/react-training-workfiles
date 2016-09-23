import {dispatch} from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
let EmployeeActions = {
	addEmployee: function(emp){
		dispatch({
			actionType: AppConstants.ADD_EMPLOYEE,
			item: emp
		});
	},
	removeEmployee: function(index){
		dispatch({
			actionType: AppConstants.REMOVE_EMPLOYEE,
			item: index
		});	
	}
}

export default EmployeeActions;
