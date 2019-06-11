import { Action } from 'redux';

export interface FractalAction<T, R> extends Action<R> {
	payload?: T;
}
