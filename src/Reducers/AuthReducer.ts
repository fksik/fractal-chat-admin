import { AuthActions } from 'src/Actions/AuthActions';
import { FractalAction } from 'src/models/Action';
import { User } from 'src/models/User';

export function AuthReducer(
	state: User | undefined,
	action: FractalAction<User, AuthActions>
): User | undefined {
	switch (action.type) {
		case AuthActions.LOGIN:
			state = action.payload;
			break;
		case AuthActions.LOGOUT:
			state = undefined;
			break;
	}
	return state;
}
