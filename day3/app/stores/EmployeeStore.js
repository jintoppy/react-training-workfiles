import {register} from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
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

function _addEmployee(emp){
	employees.push(emp);
}

function _removeEmployee(index){
	employees.splice(index,1);
}

const EmployeeStore = Object.assign(EventEmitter.prototype,{
	addChangListener: function(callback){
		this.on('ON_CHANGE', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('ON_CHANGE', callback);
	},
	emitChange: function(){
		this.emit('ON_CHANGE');
	},
	getEmployees: function(){
		return employees;
	},
	dispatcherIndex: register(function(action){

		switch(action.actionType){
			case AppConstants.ADD_EMPLOYEE:
				_addEmployee(action.item);
			break;
			case AppConstants.REMOVE_EMPLOYEE:
				_removeEmployee(action.item);
			break;
		}

		EmployeeStore.emitChange();

	})



});

export default EmployeeStore;