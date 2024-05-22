import { ACTION_TYPE } from './action-type';

export const removeProduct = (payload) => ({
	type: ACTION_TYPE.REMOVE_PRODUCT,
	payload: payload,
});
