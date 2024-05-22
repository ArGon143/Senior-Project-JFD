import { ACTION_TYPE } from '../actions';
import { ROLE } from '../../constant';

const initialUserState = {
	id: null,
	login: null,
	roleId: ROLE.GUEST,
	isAuth: false,
};

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER: {
			return {
				...state,
				...action.payload,
				isAuth: true,
			};
		}
		case ACTION_TYPE.LOGOUT: {
			return initialUserState;
		}
		default:
			return state;
	}
};
