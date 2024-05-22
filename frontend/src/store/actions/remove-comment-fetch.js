import { request } from '../../utils';
import { removeComment } from './remove-comment';

export const removeCommentFetch = (productId, id) => (dispatch) => {
	request(`/products/${productId}/comments/${id}`, 'DELETE').then(() => {
		dispatch(removeComment(id));
	});
};
