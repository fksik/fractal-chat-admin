import http from 'axios';
import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AuthActions, login } from 'src/Actions/AuthActions';
import { FractalAction } from 'src/Models/Action';
import { User } from 'src/Models/User';
import { FormValidator } from 'src/Validations/FormValidator';
import { Validator } from 'src/Validations/Validtor';
import { LoginDispatchProps, LoginProps, LoginState } from './LoginTypes';

export class LoginForm extends React.Component<LoginProps, LoginState> {
	private userNameValidator = new FormValidator([
		{ method: Validator.REQUIRED, message: 'Provide user name' },
		{ method: Validator.EMAIL, message: 'Provide valid email' }
	]);

	private passwordValidator = new FormValidator([
		{ method: Validator.REQUIRED, message: 'Provide password' }
	]);

	constructor(props: LoginProps) {
		super(props);
		this.state = { uNameValid: false, pValid: false, submitted: false };
	}

	public render() {
		const { submitted, uNameValid, pValid } = this.state;
		const isUserError = submitted && !uNameValid;
		const isPasswordError = submitted && !pValid;
		return (
			<form noValidate={true} onSubmit={this.submitLogin}>
				<h1 className="m-b-2">ACCOUNT LOGIN</h1>
				<div className="form-wrap">
					<label htmlFor="username">USERNAME</label>
					<input
						type="text"
						className="form-control"
						name="username"
						id="username"
						autoComplete="off"
						onChange={this.userNameChanged}
					/>
					<p className={`form-message ${isUserError ? 'text-warn' : ''}`}>
						{isUserError ? this.state.uNameMsg : ' '}
					</p>
				</div>
				<div className="form-wrap">
					<label htmlFor="password">PASSWORD</label>
					<input
						type="password"
						className="form-control"
						name="password"
						id="password"
						onChange={this.passwordChanged}
					/>
					<p className={`form-message ${isPasswordError ? 'text-warn' : ''}`}>
						{isPasswordError ? this.state.pMsg : ' '}
					</p>
				</div>
				<button type="submit" className="btn btn-primary">
					LOGIN
				</button>
			</form>
		);
	}

	private userNameChanged = async (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const { isValid, message } = await this.userNameValidator.validate(value);
		this.setState({ uNameMsg: message, uNameValid: isValid, username: value });
	};

	private passwordChanged = async (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const { isValid, message } = await this.passwordValidator.validate(value);
		this.setState({ pMsg: message, pValid: isValid, password: value });
	};

	private submitLogin = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const uValidation = await this.userNameValidator.validate(
			this.state.username
		);
		const pValidation = await this.passwordValidator.validate(
			this.state.password
		);
		this.setState({
			uNameMsg: uValidation.message,
			uNameValid: uValidation.isValid,
			pMsg: pValidation.message,
			pValid: pValidation.isValid,
			submitted: true
		});
		this.doLogin({
			username: this.state.username!,
			password: this.state!.password!
		});
	};

	private async doLogin(data: { username: string; password: string }) {
		await http.post<{token: string}>('/api/access/login', data);
	}
}

function mapDispatchToProps(
	dispatch: Dispatch<FractalAction<User, AuthActions>>
): LoginDispatchProps {
	return {
		login: (user: User) => {
			dispatch(login(user));
		}
	};
}

export default connect<{}, LoginDispatchProps, {}>(
	null,
	mapDispatchToProps
)(LoginForm);
