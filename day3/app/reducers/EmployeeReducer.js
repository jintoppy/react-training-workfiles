import AppConstants from '../constants/AppConstants';
let employees = [
					{
						name: 'Manoj',
						empId: 112
					},
					{
						name: 'Sree',
						empId: 113
					}
			];

function _addEmployee(state, item){
	return [...state, item];
}

let EmployeeReducer = function(state = employees, 
	action){
	switch(action.actionType){
		case AppConstants.ADD_EMPLOYEE:
			return _addEmployee(state, action.item);
		break;
		default:
			return  state;
	}
}

export default EmployeeReducer;