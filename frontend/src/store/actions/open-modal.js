import { ACTION_TYPE } from './action-type';

export const openModal = (payload) => ({
	type: ACTION_TYPE.OPEN_MODAL,
	payload: payload,
});
