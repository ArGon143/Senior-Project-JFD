import {
	applyMiddleware,
	legacy_createStore as createStore,
	compose,
	combineReducers,
} from 'redux';
import { thunk } from 'redux-thunk';
import {
	appReducer,
	productReducer,
	productsReducer,
	userReducer,
	cartReducer,
} from './reducers';
import { saveState } from '../utils';

const reduser = combineReducers({
	app: appReducer,
	user: userReducer,
	product: productReducer,
	products: productsReducer,
	cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reduser, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
	saveState(store.getState().products.cart, 'cartData');
});
