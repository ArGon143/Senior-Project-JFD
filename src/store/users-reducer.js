import { getLoadUsers, setIsLoadingUsers } from './actions';

const initialState = {
	users: [],
	isLoading: false,
};

const usersReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'LOAD_USERS':
			return {
				...state,
				users: state.users.concat(payload),
			};
		case 'IS_LOADING':
			return {
				...state,
				isLoading: payload,
			};
		default:
			return state;
	}
};

export const loadUsers = (arg) => (dispatch, getState) => {
	dispatch(setIsLoadingUsers(true));

	fetch('http://localhost:3005/users')
		.then((loadedData) => loadedData.json())
		.then((loadedUsers) => {
			dispatch(getLoadUsers(loadedUsers));
		})
		.finally(() => {
			dispatch(setIsLoadingUsers(false));
		});
};

export default usersReducer;
