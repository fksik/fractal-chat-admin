import * as React from 'react';
import { Switch } from 'react-router-dom';
import { Home } from 'src/Home/Home';
import { Login } from 'src/Login/Login';
import { PrivateRoute } from 'src/routes/PrivateRoute';
import { LoginRoute } from './LoginRoute';

export const routes = (
	<div>
		<Switch>
			<LoginRoute path="/login" component={Login} />
			<PrivateRoute path="/" component={Home} />
		</Switch>
	</div>
);
