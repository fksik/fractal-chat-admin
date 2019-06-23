import { FractalAction } from 'src/Models/Action';
import { User } from 'src/Models/User';

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
