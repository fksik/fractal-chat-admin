import * as React from 'react';
import { Route } from 'react-router-dom';

export class PublicRoute extends Route {
	public render() {
		return (
			<Route {...this.props}/>
		);
	}
};