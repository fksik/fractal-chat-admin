import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as React from 'react';
import './App.scss';
import { NavBar } from './NavBar/NavBar';
import { routes } from './routes';

interface AppProps {
	history: History;
}

export class App extends React.Component<AppProps> {
	public render() {
		return (
			<div className="app">
				<NavBar/>
				<ConnectedRouter history={this.props.history}>{routes}</ConnectedRouter>
			</div>
		);
	}
}
