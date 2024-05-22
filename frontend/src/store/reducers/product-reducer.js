import { ACTION_TYPE } from '../actions';

const initialProductState = {
	id: '',
	title: '',
	price: '',
	imageUrl: '',
	description: '',
	published_at: '',
	specifications: [
		{ name: 'Высота', value: '' },
		{ name: 'Форма цветка', value: '' },
		{ name: 'Цвет цветка', value: '' },
	],
	comments: [],
	count: '',
	selected: false,
	bestSel: false,
};

export const productReducer = (state = initialProductState, action) => {
	switch (action.type) {
		case ACTION_TYPE.ADD_COMMENT:
			return {
				...state,
				comments: [...state.comments, action.payload],
			};
		case ACTION_TYPE.REMOVE_COMMENT:
			return {
				...state,
				comments: state.comments.filter(
					(comment) => comment.id !== action.payload,
				),
			};
		case ACTION_TYPE.SET_PRODUCT_DATA:
			return {
				...state,
				...action.payload,
			};
		case ACTION_TYPE.RESET_PRODUCT_DATA:
			return initialProductState;

		default:
			return state;
	}
};
