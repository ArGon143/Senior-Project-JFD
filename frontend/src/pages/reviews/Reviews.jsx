import styles from './Reviews.module.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addReviewFetch,
	CLOSE_MODAL,
	loadReviewsFetch,
	openModal,
	removeReviewFetch,
} from '../../store/actions';
import { selectReviews, selectUserRole } from '../../store/selectors';
import { ROLE } from '../../constant';
import { NewReviewOrComment, Review } from '../../components';

export const Reviews = () => {
	const [newReview, setNewReview] = useState('');
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);
	const reviews = useSelector(selectReviews);

	useEffect(() => {
		dispatch(loadReviewsFetch());
	}, [dispatch]);

	const onNewReviewAdd = (content) => {
		dispatch(
			openModal({
				text: 'Оставить отзыв?',
				onConfirm: () => {
					dispatch(addReviewFetch(content));
					dispatch(CLOSE_MODAL);
					setNewReview('');
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isGuest = userRole === ROLE.GUEST;

	const rewersReviews = reviews.slice().reverse();

	return (
		<div className={styles.reviews}>
			{!isGuest && (
				<NewReviewOrComment
					newData={newReview}
					onClick={() => onNewReviewAdd(newReview)}
					onChange={({ target }) => setNewReview(target.value)}
					placeholder={'Ваш отзыв...'}
				/>
			)}
			{rewersReviews.map((review) => (
				<Review
					key={review.id}
					id={review.id}
					data={review}
					textModal={'Удалить комментарий?'}
					removeFunction={removeReviewFetch(review.id)}
				/>
			))}
		</div>
	);
};
