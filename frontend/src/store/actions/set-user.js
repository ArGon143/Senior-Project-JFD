import { ACTION_TYPE } from './action-type';

export const setUser = (payload) => ({
	type: ACTION_TYPE.SET_USER,
	payload: payload,
});
