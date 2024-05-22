import { ACTION_TYPE } from './action-type';

export const addComment = (payload) => ({
	type: ACTION_TYPE.ADD_COMMENT,
	payload: payload,
});
