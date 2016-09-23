import EmployeeReducer from './EmployeeReducer';
import {combineReducers} from 'redux';

const AppReducer = combineReducers({
	EmployeeReducer: EmployeeReducer
});

export default AppReducer;


