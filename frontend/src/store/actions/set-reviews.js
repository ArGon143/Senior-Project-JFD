import { ACTION_TYPE } from './action-type';

export const setReviews = (payload) => ({
	type: ACTION_TYPE.SET_REVIEWS,
	payload: payload,
});
