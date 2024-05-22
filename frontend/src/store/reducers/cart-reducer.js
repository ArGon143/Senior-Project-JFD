import { ACTION_TYPE } from '../actions';

const initialUserState = {
	purcData: [],
};

export const cartReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PURCHASE_DATA:
			return {
				...state,
				purcData: action.payload,
			};
		default:
			return state;
	}
};
