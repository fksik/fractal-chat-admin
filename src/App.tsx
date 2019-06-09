import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as React from 'react';
import styles from './App.scss';
import { NavBar } from './NavBar/NavBar';
import { routes } from './routes';

interface AppProps {
	history: History;
}

export class App extends React.Component<AppProps> {
	public render() {
		return (
			<div className={styles.app}>
				<NavBar/>
				<ConnectedRouter history={this.props.history}>{routes}</ConnectedRouter>
			</div>
		);
	}
}
