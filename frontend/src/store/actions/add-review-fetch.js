import { request } from '../../utils';
import { addReview } from './add-review';
import { loadReviewsFetch } from './load-reviews-fetch';

export const addReviewFetch = (content) => (dispatch) => {
	request(`/reviews`, 'POST', { content }).then((review) => {
		dispatch(addReview(review.data));
		dispatch(loadReviewsFetch());
	});
};
