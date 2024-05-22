import { request } from '../../utils';
import { setPurchaseData } from './set-purhase-data';

export const loadPurchaseDataFetch = () => (dispatch) => {
	request('/cart').then(({ data: PurhaseData }) => {
		dispatch(setPurchaseData(PurhaseData));
	});
};
