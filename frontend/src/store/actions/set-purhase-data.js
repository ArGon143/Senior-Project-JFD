import { ACTION_TYPE } from './action-type';

export const setPurchaseData = (payload) => ({
	type: ACTION_TYPE.SET_PURCHASE_DATA,
	payload: payload,
});
