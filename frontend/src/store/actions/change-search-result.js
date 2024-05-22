import { ACTION_TYPE } from './action-type';

export const changeSearchResult = (payload) => ({
	type: ACTION_TYPE.CHANGE_SEARCH_TERM,
	payload: payload,
});
