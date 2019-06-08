import * as React from 'react';
import { Component } from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';

export class LoginRoute extends Route {
	public render() {
		return (
			<Route {...this.props} render={this.renderFn} />
		)
	}

	public renderFn(props: RouteComponentProps) {
		return true ? <Redirect to="/" /> : <Component {...props} />
	}
}
