var React = require('react');
import {Link} from 'react-router';
import EmployeeCount from './EmployeeCount';
var Main = React.createClass({
	render: function(){
		return (
			<div>
				<header>
					React App
					<Link to="/">Home</Link>
					<Link to="/github">Github Page</Link>
					<EmployeeCount />
				</header>
				<section>
					{this.props.children}
				</section>	
			</div>
			)
	}
});


module.exports = Main;

