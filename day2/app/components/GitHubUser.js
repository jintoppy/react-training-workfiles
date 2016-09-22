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

		for(let i=0; i<this.state.users.length;i++){
			let user = this.state.users[i];
			let userTr = (
					<tr>
						<td>{user.login}</td>
						<td>{user.id}</td>
					</tr>
				)
			trs.push(userTr);
		}
		return (
				<div>
					<table>
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
				</div>
			)
	}

}

export default GithubUser