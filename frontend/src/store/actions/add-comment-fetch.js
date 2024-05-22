import { request } from '../../utils';
import { addComment } from './add-comment';

export const addCommentFetch = (productId, content) => (dispatch) => {
	request(`/products/${productId}/comments`, 'POST', { content }).then((comment) => {
		dispatch(addComment(comment.data));
	});
};
