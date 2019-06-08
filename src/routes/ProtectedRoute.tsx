import * as React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';

export class ProtectedRoute extends React.Component<RouteProps> {
	public component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
	public render() {
		const { component, ...rest } = this.props;
		this.component = component!;
		return (
			<Route {...rest} render={this.renderFn} />
		);
	}

	private renderFn = (props: RouteComponentProps<any>) => {
		return true ? <this.component {...props} /> : <Redirect to="/login" />
	}
};