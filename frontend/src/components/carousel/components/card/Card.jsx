import styles from './Card.module.css';
import PropTypes from 'prop-types';
import { CustomImage } from '../../../сustom-image/СustomImage';

export const Card = ({ item }) => {
	const title = item.author;
	const content = item.content;
	const publishedAt = item.published_at;

	return (
		<div className={styles.card}>
			<div className={styles.titleCard}>
				<CustomImage
					className={styles.titleImg}
					src="https://i.postimg.cc/CLB6RQxF/icons8-male-user-100.png"
					alt={'autor'}
					width={50}
					height={50}
					margin={'0 20px 0 0'}
					padding={'0'}
				/>
				<h2 className={styles.titleText}>{title}</h2>
			</div>
			<p
				className={styles.titleAbout}
				style={{ fontWeight: 'bold', marginBottom: '1rem' }}
			>
				{publishedAt}
			</p>
			<div className={styles.titleContext}>{content}</div>
		</div>
	);
};

Card.propTypes = {
	item: PropTypes.objectOf(PropTypes.string),
};
