import { ACTION_TYPE } from './action-type';

export const removeComment = (payload) => ({
	type: ACTION_TYPE.REMOVE_COMMENT,
	payload: payload,
});
