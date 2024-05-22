import { ACTION_TYPE } from './action-type';

export const searchResult = (payload) => ({
	type: ACTION_TYPE.SEARCH_PRODUCT,
	payload: payload,
});
