import React from 'react';
import axios from 'axios';

class GithubUser extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			users: []
		};
	}
	componentDidMount(){
		let self = this;
		axios.get('https://api.github.com/users')
			.then(function(response){
				self.setState({
					users: response.data
				});
			});
	}
	render(){
		let trs = [];
		let outputEl;

		for(let i=0; i<this.state.users.length;i++){
			let user = this.state.users[i];
			let userTr = (
					<tr key={i}>
						<td>{user.login}</td>
						<td>{user.id}</td>
					</tr>
				)
			trs.push(userTr);
		}

		if(this.state.users.length>0){
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
					{outputEl}			
				</div>
			)
	}

}

export default GithubUser