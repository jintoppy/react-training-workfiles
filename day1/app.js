var App = React.createClass({
	render: function(){
		return React.createElement(
			"div", 
			{
				name: 'asdf'
			}, 
			React.createElement("span", null, "of child")
			)
	}
});
ReactDOM.render(
	   React.createElement(App)
	,
	document.getElementById('container')
	)
