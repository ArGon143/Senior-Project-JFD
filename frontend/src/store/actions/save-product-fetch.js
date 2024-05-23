import { request } from '../../utils';
import { loadProductsFetch } from './load-products-fetch';
import { setProductData } from './set-product-data';

export const saveProductFetch = (id, newProductData) => (dispatch) => {
	const saveRequest = id
		? request(`/products/${id}`, 'PATCH', newProductData)
		: request('/products', 'POST', newProductData);

	return saveRequest.then((updatedProduct) => {
		dispatch(setProductData(updatedProduct.data));
		dispatch(loadProductsFetch());
		return updatedProduct.data;
	});
};
