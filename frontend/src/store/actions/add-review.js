import { ACTION_TYPE } from './action-type';

export const addReview = (payload) => ({
	type: ACTION_TYPE.ADD_REVIEW,
	payload: payload,
});
