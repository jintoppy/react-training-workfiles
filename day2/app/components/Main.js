var React = require('react');
import {Link} from 'react-router';

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<header>
					React App
					<Link to="/">Home</Link>
					<Link to="/github">Github Page</Link>
				</header>
				<section>
					{this.props.children}
				</section>	
			</div>
			)
	}
});


module.exports = Main;

