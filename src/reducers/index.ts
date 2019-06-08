import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { counterReducer } from './counter';

export const rootReducer = (history: History) =>
	combineReducers({
		count: counterReducer,
		router: connectRouter(history)
	});

export interface State {
	count: number;
	router: RouterState;
}
