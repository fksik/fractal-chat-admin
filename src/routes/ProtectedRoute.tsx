import * as React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { AuthRouteProps } from './AuthRouteProps';

export class ProtectedRoute extends React.Component<AuthRouteProps> {
	public component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
	public isAuthenticated : boolean;
	public render() {
		const { component, isAuthenticated, ...rest } = this.props;
		this.component = component!;
		this.isAuthenticated = isAuthenticated;
		return (
			<Route {...rest} render={this.renderFn} />
		);
	}

	private renderFn = (props: RouteComponentProps<any>) => {
		return this.isAuthenticated ? <this.component {...props} /> : <Redirect to="/login" />
	}
};