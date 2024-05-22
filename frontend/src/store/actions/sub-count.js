import { ACTION_TYPE } from './action-type';

export const subCount = (payload) => ({
	type: ACTION_TYPE.SUB_COUNT,
	payload: payload,
});
