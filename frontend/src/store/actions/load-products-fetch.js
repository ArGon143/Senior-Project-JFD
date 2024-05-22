import { request } from '../../utils';
import { setIsLoading } from './set-is-loading';
import { setProducts } from './set-products';

export const loadProductsFetch = () => (dispatch) => {
	dispatch(setIsLoading(true));

	request('/products')
		.then(({ data: products }) => {
			dispatch(setProducts(products));
		})
		.finally(() => {
			dispatch(setIsLoading(false));
		});
};
