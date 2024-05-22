import { ACTION_TYPE } from './action-type';

export const setIsLoading = (payload) => ({
	type: ACTION_TYPE.IS_LOADING,
	payload: payload,
});
