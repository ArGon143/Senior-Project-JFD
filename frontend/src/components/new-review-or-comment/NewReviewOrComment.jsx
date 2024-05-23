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
				src="https://i.postimg.cc/CL3rksRb/icons8-paper-plane-100.png"
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
