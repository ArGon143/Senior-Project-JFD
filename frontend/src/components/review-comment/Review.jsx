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
							src="https://1.downloader.disk.yandex.ru/preview/a5a713fe4cfec0087c5126fce603a9b119b0b9d3b3bddffe707607f82c5acf77/inf/YRcb4TlFlTh5o9Hirb3pDKUkfOwvjuEt8-lhUUChOERwasNLnH4erxnrrJ8ViqDJKK4PPIllbmH7gsaf8sU2gw%3D%3D?uid=537849441&filename=icons8-male-user-100.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
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
							src="https://2.downloader.disk.yandex.ru/preview/0f316a5acae452c39297689752b7b1e5469c4925ed3846a3fbf3697f1140a44d/inf/OHorkaWh9HOWw8p9NNrSgrXu0jksxGkHIg1C8wOh1djvCJj7_uXP_m7jNp9wvNOt1W5J9rQEMttXuoJ0EcSszQ%3D%3D?uid=537849441&filename=icons8-calendar-100.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
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
					src="https://4.downloader.disk.yandex.ru/preview/d0b0d018f105d086aacab82b141f395862169860587211594b7dcf47f9559763/inf/S8LFtDL_BVVx-0LfPJ_eYq8vdc4f7yY1V24d7vwofjlmfB37Bg2sdADJ9x9OjT9gqn_pMn8xNm499gYgywMrcQ%3D%3D?uid=537849441&filename=icons8-trash-96.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
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
