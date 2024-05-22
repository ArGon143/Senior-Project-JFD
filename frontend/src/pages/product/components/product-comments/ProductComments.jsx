import styles from './ProductComments.module.css';
import PropTypes from 'prop-types';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewReviewOrComment, Review } from '../../../../components';
import { ROLE } from '../../../../constant';
import {
	addCommentFetch,
	CLOSE_MODAL,
	openModal,
	removeCommentFetch,
} from '../../../../store/actions';
import { selectUserRole } from '../../../../store/selectors';

export const ProductComments = ({ comments, productId }) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);

	const onNewCommentAdd = (productId, content) => {
		dispatch(
			openModal({
				text: 'Опубликовать комментарий?',
				onConfirm: () => {
					dispatch(addCommentFetch(productId, content));
					dispatch(CLOSE_MODAL);
					setNewComment('');
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isGuest = userRole === ROLE.GUEST;

	return (
		<div className={styles.reviews}>
			{!isGuest && (
				<NewReviewOrComment
					newData={newComment}
					onClick={() => onNewCommentAdd(productId, newComment)}
					onChange={({ target }) => setNewComment(target.value)}
					placeholder={'Ваш комментарий...'}
				/>
			)}
			{comments.map((comment) => (
				<Review
					key={comment.id}
					id={comment.id}
					data={comment}
					textModal={'Удалить комментарий?'}
					removeFunction={removeCommentFetch(productId, comment.id)}
				/>
			))}
		</div>
	);
};

ProductComments.propTypes = {
	productId: PropTypes.string.isRequired,
	comments: PropTypes.array,
};
