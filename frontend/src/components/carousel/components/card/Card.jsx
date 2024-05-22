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
					src="https://1.downloader.disk.yandex.ru/preview/a5a713fe4cfec0087c5126fce603a9b119b0b9d3b3bddffe707607f82c5acf77/inf/YRcb4TlFlTh5o9Hirb3pDKUkfOwvjuEt8-lhUUChOERwasNLnH4erxnrrJ8ViqDJKK4PPIllbmH7gsaf8sU2gw%3D%3D?uid=537849441&filename=icons8-male-user-100.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
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
