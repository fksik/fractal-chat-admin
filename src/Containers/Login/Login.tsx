import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AuthActions, login } from 'src/Actions/AuthActions';
import { FractalAction } from 'src/models/Action';
import { User } from 'src/models/User';
import { LoginDispatchProps, LoginProps, LoginState } from './LoginTypes';

export class Login extends React.Component<LoginProps, LoginState> {
	public render() {
		return (
			<div>login</div>
		)
	}
}

function mapDispatchToProps(dispatch: Dispatch<FractalAction<User, AuthActions>>): LoginDispatchProps {
	return {
		login: (user: User) => {
			dispatch(login(user));
		}
	}
}

export default connect<{}, LoginDispatchProps, {}>(null, mapDispatchToProps)(Login);