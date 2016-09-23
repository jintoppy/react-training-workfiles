import {dispatch} from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
let GithubActions = {
	onGithubFetchStart: function(){
		dispatch({
			actionType: AppConstants.GITHUB_FETCH_STARTED
		});
	},
	onGithubFetchSuccess: function(users){
		dispatch({
			actionType: AppConstants.GITHUB_GOT_REPONSE_SUCCESS,
			item: users
		});
	},
	onGithubFetchError: function(err){
		dispatch({
			actionType: AppConstants.GITHUB_GOT_REPONSE_FAILURE,
			item: err
		});
	}
}

export default GithubActions;