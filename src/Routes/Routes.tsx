import * as React from 'react';
import { Switch } from 'react-router-dom';
import { Home } from 'src/Containers/Home/Home';
import { Login } from 'src/Containers/Login/Login';
import { ProtectedRoute } from 'src/Routes/ProtectedRoute';
import { LoginRoute } from './LoginRoute';

export const ROUTES = (auth: boolean) => {
	return (
		<div>
			<Switch>
				<LoginRoute path="/login" component={Login} isAuthenticated={auth} />
				<ProtectedRoute path="/" component={Home} isAuthenticated={auth}/>
			</Switch>
		</div>
	);
}
