import * as React from 'react';
import styles from './Login.scss';
import { LoginForm } from './LoginForm';

export class Login extends React.Component {
	public render() {
		return (
			<div className={styles.loginContainer}>
				<div className={styles.loginWrap}>
					<LoginForm />
				</div>
			</div>
		);
	}
}
