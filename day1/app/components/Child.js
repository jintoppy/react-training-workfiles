var React = require('react');

var Child = React.createClass({
		render: function(){
			return (
				<div>
					<span>{this.props.myname}</span>
					<span>{this.props.mytitle}</span>
					<button>This is child component</button>
				</div>
			)
		}
});

module.exports = Child;