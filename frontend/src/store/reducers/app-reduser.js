import { ACTION_TYPE } from '../actions';

const initialAppState = {
	wasLogout: false,
	modal: {
		isOpen: false,
		text: '',
		onConfirm: () => {},
		onCancel: () => {},
	},
	reviews: [],
	isLoading: false,
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				wasLogout: !state.wasLogout,
			};
		case ACTION_TYPE.IS_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		case ACTION_TYPE.OPEN_MODAL:
			return {
				...state,
				modal: {
					...state.modal,
					...action.payload,
					isOpen: true,
				},
			};
		case ACTION_TYPE.CLOSE_MODAL:
			return initialAppState;

		case ACTION_TYPE.SET_REVIEWS:
			return {
				...state,
				reviews: action.payload,
			};
		case ACTION_TYPE.ADD_REVIEW:
			return {
				...state,
				reviews: state.reviews.concat(action.payload),
			};
		case ACTION_TYPE.REMOVE_REVIEW:
			return {
				...state,
				reviews: state.reviews.filter((review) => review.id !== action.payload),
			};
		default:
			return state;
	}
};
