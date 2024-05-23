import { useDispatch, useSelector } from 'react-redux';
import styles from './Review.module.css';
import PropTypes from 'prop-types';
import { selectUserRole } from '../../store/selectors';
import { CLOSE_MODAL, openModal } from '../../store/actions';
import { ROLE } from '../../constant';
import { CustomImage } from '../сustom-image/СustomImage';

export const Review = ({ id, data, textModal, removeFunction }) => {
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);

	const onRemove = (id) => {
		dispatch(
			openModal({
				text: textModal,
				onConfirm: () => {
					dispatch(removeFunction);
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);

	return (
		<div className={styles.review}>
			<div className={styles.content}>
				<div className={styles.informationPanel}>
					<div className={styles.author}>
						<CustomImage
							src="https://i.postimg.cc/CLB6RQxF/icons8-male-user-100.png"
							alt={'autor'}
							width={70}
							height={70}
							margin={'0 20px 0 0'}
							padding={'0'}
						/>
						{data.author}
					</div>

					<div className={styles.publishedAt}>
						<CustomImage
							src="https://i.postimg.cc/qqZYPfBF/icons8-calendar-100.png"
							alt={'calendar'}
							width={20}
							height={20}
							margin={'0'}
							padding={'0 10px 0 0'}
						/>
						{data.publishedAt}
					</div>
				</div>
				<div className={styles.contentText}>{data.content}</div>
			</div>
			{isAdminOrModerator && (
				<CustomImage
					src="https://i.postimg.cc/50Kn0BcY/icons8-trash-96.png"
					alt={'trash'}
					width={40}
					height={40}
					margin={'0 0 0 10px'}
					padding={'0'}
					cursor={'pointer'}
					onClick={() => onRemove(data.id)}
				/>
			)}
		</div>
	);
};

Review.propTypes = {
	data: PropTypes.objectOf(PropTypes.string),
	content: PropTypes.string,
	textModal: PropTypes.string.isRequired,
	removeFunction: PropTypes.func.isRequired,
};
