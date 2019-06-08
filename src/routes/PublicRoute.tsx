import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';

export class PublicRoute extends React.Component<RouteProps> {
	public render() {
		return (
			<Route {...this.props} />
		);
	}
};