import { request } from '../../utils';
import { setReviews } from './set-reviews';

export const loadReviewsFetch = () => (dispatch) => {
	request('/reviews').then(({ data: reviews }) => {
		dispatch(setReviews(reviews));
	});
};
