import { ACTION_TYPE } from './action-type';

export const addToCart = (payload) => ({
	type: ACTION_TYPE.ADD_TO_CART,
	payload: payload,
});
