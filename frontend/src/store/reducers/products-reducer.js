import { loadState } from '../../utils';
import { ACTION_TYPE } from '../actions';

const initialCart = loadState('cartData');

const initialProductsState = {
	products: [],
	searchResult: [],
	searchTerm: '',
	sortResult: [],
	cart: initialCart,
};

export const productsReducer = (state = initialProductsState, action) => {
	switch (action.type) {
		case ACTION_TYPE.UPDATE_PRODUCTS:
			return {
				...state,
				products: [...state.products, action.payload],
			};
		case ACTION_TYPE.REMOVE_PRODUCT:
			return {
				...state,
				products: state.products.filter(
					(product) => product.id !== action.payload,
				),
			};
		case ACTION_TYPE.SET_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		case ACTION_TYPE.SEARCH_PRODUCT:
			return {
				...state,
				searchResult: action.payload,
			};
		case ACTION_TYPE.CHANGE_SEARCH_TERM:
			return {
				...state,
				searchTerm: action.payload,
			};
		case ACTION_TYPE.SORT_PRODUCT:
			return {
				...state,
				sortResult: action.payload,
			};

		case ACTION_TYPE.SET_CART:
			return {
				...state,
				cart: action.payload,
			};
		case ACTION_TYPE.ADD_TO_CART:
			return {
				...state,
				products: state.products.map((product) => {
					if (product.id === action.payload) {
						product.selected = true;
					}
					return product;
				}),
			};
		case ACTION_TYPE.REMOVE_FROM_CART:
			return {
				...state,
				products: state.products.map((product) => {
					if (product.id === action.payload) {
						product.selected = false;
						product.count = 1;
					}
					return product;
				}),
			};
		case ACTION_TYPE.ADD_COUNT:
			return {
				...state,
				products: state.products.map((product) => {
					if (product.id === action.payload) {
						product.count++;
					}
					return product;
				}),
			};
		case ACTION_TYPE.SUB_COUNT:
			return {
				...state,
				products: state.products.map((product) => {
					if (product.id === action.payload) {
						if (product.count !== 1) {
							product.count--;
						}
					}
					return product;
				}),
			};
		case ACTION_TYPE.CLEAR_CART:
			return {
				...state,
				products: state.products.map((product) => {
					if (product.selected) {
						product.selected = false;
						product.count = 1;
					}
					return product;
				}),
			};

		default:
			return state;
	}
};
