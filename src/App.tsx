import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as React from 'react';
import styles from './App.scss';
import { NavBar } from './Components/NavBar/NavBar';
import { ROUTES } from './routes/Routes';

interface AppProps {
	history: History;
}

export class App extends React.Component<AppProps> {
	public render() {
		return (
			<div className={styles.app}>
				<NavBar/>
				<ConnectedRouter history={this.props.history}>{ROUTES(true)}</ConnectedRouter>
			</div>
		);
	}
}
