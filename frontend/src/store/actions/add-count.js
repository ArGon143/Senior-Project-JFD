import { ACTION_TYPE } from './action-type';

export const addCount = (payload) => ({
	type: ACTION_TYPE.ADD_COUNT,
	payload: payload,
});
