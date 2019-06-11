import { FractalAction } from 'src/models/Action';
import { User } from 'src/models/User';

export enum AuthActions {
	LOGIN = 'login',
	LOGOUT = 'logout'
}

export function login(user: User): FractalAction<User, AuthActions> {
	return { type: AuthActions.LOGIN, payload: user };
}

export function logOut(): FractalAction<User, AuthActions> {
	return { type: AuthActions.LOGOUT };
}
