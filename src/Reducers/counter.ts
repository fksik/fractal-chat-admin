import { Action } from 'redux';

export const counterReducer = (state = 0, action: Action) => {
	switch (action.type) {
		case 'INCREMENT':
			return ++state;
		case 'DECREMENT':
			return --state;
		default:
			return state;
	}
};
