import { User } from 'src/models/User';

export interface LoginState {
	message: string;
}

export interface LoginDispatchProps {
	login: (user: User) => void;
}

export type LoginProps = LoginDispatchProps;
