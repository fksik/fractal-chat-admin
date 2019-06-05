import * as React from 'react';
import { Route, RouteComponentProps, Redirect, RouteProps } from 'react-router-dom';
import * as H from 'history';

export interface ConditionalRouteProps extends RouteProps {
    routeCondition: boolean;
    redirectTo: H.LocationDescriptor;
}

export class PrivateRoute extends React.Component<ConditionalRouteProps> {
    render() {
        const { component: Component, routeCondition, redirectTo, ...rest } = this.props;
        return <Route {...rest} render={this.renderFn} />
    }

    private renderFn = (renderProps: RouteComponentProps<any>) => {
        if (this.props.routeCondition) {
            const { component: Component } = this.props;
            if (!Component) {
                return null;
            }
            return <Component {...renderProps} />
        }

        return <Redirect to={this.props.redirectTo} />;
    };
}