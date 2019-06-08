import * as React from 'react';
import { Switch } from 'react-router-dom';
import { Home } from 'src/Home/Home';
import { Login } from 'src/Login/Login';
import { ProtectedRoute } from 'src/routes/ProtectedRoute';
import { LoginRoute } from './LoginRoute';

export const routes = (
	<div>
		<Switch>
			<LoginRoute path="/login" component={Login} />
			<ProtectedRoute path="/" component={Home} />
		</Switch>
	</div>
);
