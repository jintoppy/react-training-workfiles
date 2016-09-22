var React = require('react');
var Employees = require('./Employees');
import GithubUser from './GithubUser';

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<GithubUser />
				<Employees />
			</div>
			)
	}
});


module.exports = Main;

