var React = require('react');

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<header>
					React App

				</header>
				<section>
					{this.props.children}
				</section>	
			</div>
			)
	}
});


module.exports = Main;

