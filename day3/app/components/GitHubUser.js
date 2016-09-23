import React from 'react';
import axios from 'axios';
import GithubActions from '../actions/GithubActions';
import GithubStore from '../stores/GithubStore';


class GithubUser extends React.Component{

	constructor(props){
		super(props);
		this.state = GithubStore.getState();
	}
	componentWillUnMount(){
		GithubStore.removeChangeListener(this.onDataChange.bind(this));	
	}
	onDataChange(){
		var newState =GithubStore.getState(); 
		this.setState(newState);
	}
	goHome(){
		this.props.history.pushState(null, "/");
	}
	componentDidMount(){
		let self = this;
		GithubActions.onGithubFetchStart();
		axios.get('https://api.github.com/users')
			.then(function(response){
				GithubActions.onGithubFetchSuccess(response.data);
			});
		GithubStore.addChangeListener(this.onDataChange.bind(this));
	}
	render(){
		let trs = [];
		let outputEl;

		for(let i=0; i<this.state.githubUsers.length;i++){
			let user = this.state.githubUsers[i];
			let userTr = (
					<tr key={i}>
						<td>{user.login}</td>
						<td>{user.id}</td>
					</tr>
				)
			trs.push(userTr);
		}

		if(!this.state.isLoading){
			outputEl = <table>
						<thead>
							<tr>
								<th>Login Name</th>
								<th>Id</th>
							</tr>
						</thead>
						<tbody>
							{trs}
						</tbody>
					</table>
		}
		else{
			outputEl = (<h1 className="loading-msg">Loading....</h1>)
		}
		return (
				<div>
					<button onClick={this.goHome.bind(this)}>Go To Home Page</button>
					{outputEl}			
				</div>
			)
	}

}

export default GithubUser