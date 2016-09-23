import {dispatch} from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
let GithubActions = {
	onGithubFetchStart: function(){
		dispatch({
			actionType: AppConstants.GITHUB_FETCH_STARTED
		});
	}
}

export default GithubActions;