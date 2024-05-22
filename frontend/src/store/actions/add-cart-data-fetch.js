import { request } from '../../utils';

export const addCartDataFetch = (newCartData) => (dispatch) => {
	request('/cart', 'POST', newCartData);
};
