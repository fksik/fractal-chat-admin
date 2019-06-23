import { User } from 'src/Models/User';

export interface LoginState {
	submitted?: boolean;
	uNameMsg?: string;
	uNameValid?: boolean;
	pMsg?: string;
	pValid?: boolean;
	username?: string;
	password?: string;
}

export interface LoginDispatchProps {
	login?: (user: User) => void;
}

export type LoginProps = LoginDispatchProps;
