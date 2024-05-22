import { ACTION_TYPE } from './action-type';

export const sortResult = (payload) => ({
	type: ACTION_TYPE.SORT_PRODUCT,
	payload: payload,
});
