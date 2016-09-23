import React from 'react';
import {Route, IndexRoute} from 'react-router';
import GitHubUser from './components/GitHubUser';
var Employees = require('./components/Employees');
import Main from './components/Main';

export default (
	<Route path="/" component={Main}>
		<Route path="github" component={GitHubUser}/>
		<IndexRoute component={Employees} />
	</Route>

	)

