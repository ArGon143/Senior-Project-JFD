import { ACTION_TYPE } from './action-type';

export const removeReview = (payload) => ({
	type: ACTION_TYPE.REMOVE_REVIEW,
	payload: payload,
});
