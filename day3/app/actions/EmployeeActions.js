import {dispatch} from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
let EmployeeActions = {
	addEmployee: function(emp){
		dispatch({
			actionType: AppConstants.ADD_EMPLOYEE,
			item: emp
		});
	}
}

export default EmployeeActions;
