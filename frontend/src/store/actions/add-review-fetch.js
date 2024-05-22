import { request } from '../../utils';
import { addReview } from './add-review';

export const addReviewFetch = (content) => (dispatch) => {
	request(`/reviews`, 'POST', { content }).then((review) => {
		dispatch(addReview(review.data));
	});
};
