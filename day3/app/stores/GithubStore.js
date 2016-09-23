import {register} from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import AppConstants from '../constants/AppConstants';

let state = {
	isLoading: false,
	githubUsers: []
};


const GithubStore = Object.assign(EventEmitter.prototype,{
	addChangeListener: function(callback){
		this.on('ON_CHANGE', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('ON_CHANGE', callback);
	},
	emitChange: function(){
		this.emit('ON_CHANGE');
	},
	getState: function(){
		return state;
	},
	dispatcherIndex: register(function(action){

		switch(action.actionType){
			case AppConstants.GITHUB_FETCH_STARTED:
				state.isLoading = true;
			break;
		}

		GithubStore.emitChange();

	})

});

export default GithubStore;