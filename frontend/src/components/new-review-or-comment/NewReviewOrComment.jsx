import PropTypes from 'prop-types';
import { Textarea } from '../textarea/Textarea';
import { CustomImage } from '../сustom-image/СustomImage';
import styles from './NewReviewOrComment.module.css';

export const NewReviewOrComment = ({ newData, onClick, onChange, placeholder }) => {
	return (
		<div className={styles.newReviews}>
			<Textarea
				width={'800px'}
				outlineColor={'#ff8f52'}
				background={'none'}
				margin={'0 20px 0 0'}
				name={'review'}
				value={newData}
				placeholder={placeholder}
				onChange={onChange}
			/>
			<CustomImage
				src="https://4.downloader.disk.yandex.ru/preview/00d8dfde31f44643573ff93439743a579766310574e276d7e7e2023d674630dc/inf/aiaPjPKZ23NJwjB5342Lyskd82roEeoC1Bdf9kMDUSfJoZcG182uLq8yBKRCXRETkv1vtU44knpy28HUkWevFg%3D%3D?uid=537849441&filename=icons8-paper-plane-100.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
				alt={'send'}
				width={30}
				height={30}
				margin={'0'}
				padding={'0'}
				onClick={onClick}
				cursor={'pointer'}
			/>
		</div>
	);
};

NewReviewOrComment.propTypes = {
	newData: PropTypes.string,
	onClick: PropTypes.func,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
};
