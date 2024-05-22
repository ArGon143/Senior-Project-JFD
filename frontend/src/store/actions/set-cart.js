import { ACTION_TYPE } from './action-type';

export const setCart = (payload) => ({
	type: ACTION_TYPE.SET_CART,
	payload: payload,
});
