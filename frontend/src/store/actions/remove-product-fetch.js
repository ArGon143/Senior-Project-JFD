import { request } from '../../utils';
import { removeProduct } from './remove-product';

export const removeProductFetch = (id) => (dispatch) =>
	request(`/products/${id}`, 'DELETE').then(() => {
		dispatch(removeProduct(id));
	});
