import { request } from '../../utils';
import { loadReviewsFetch } from './load-reviews-fetch';
import { removeReview } from './remove-review';

export const removeReviewFetch = (id) => (dispatch) => {
	request(`/reviews/${id}`, 'DELETE').then(() => {
		dispatch(removeReview(id));
		dispatch(loadReviewsFetch());
	});
};
