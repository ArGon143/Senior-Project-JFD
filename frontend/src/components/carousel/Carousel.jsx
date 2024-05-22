import styles from './Carousel.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Card } from './components';
import { CustomImage } from '../сustom-image/СustomImage';
import { MAX_VISIBILITY } from './constant';
import { NoContent } from '../no-content/NoContent';

export const Carousel = ({ content }) => {
	let startActive;

	if (content.length === 1) {
		startActive = content.length - 1;
	} else if (content.length === 2) {
		startActive = content.length - 2;
	} else startActive = 2;

	const [active, setActive] = useState(startActive);

	return content.length === 0 ? (
		<NoContent className={styles.noContent} children={'Пока нет отзывов'} />
	) : (
		<div className={styles.carousel}>
			{active > 0 && (
				<button
					className={`${styles.nav} ${styles.navLeft}`}
					onClick={() => setActive((i) => i - 1)}
				>
					<CustomImage
						src="https://i.postimg.cc/Cx8tQ63v/icons8-chevron-left-96.png"
						alt={'chevron_left'}
						width={72}
						height={72}
					/>
				</button>
			)}

			{content.map((item, index) => (
				<div
					key={item.id}
					className={styles.cardContainer}
					style={{
						'--active': index === active ? 1 : 0,
						'--offset': (active - index) / 3,
						'--direction': Math.sign(active - index),
						'--abs-offset': Math.abs(active - index) / 3,
						pointerEvents: active === index ? 'auto' : 'none',
						opacity: Math.abs(active - index) >= MAX_VISIBILITY ? '0' : '1',
						display:
							Math.abs(active - index) > MAX_VISIBILITY ? 'none' : 'block',
					}}
				>
					<Card item={item} />
				</div>
			))}
			{active < content.length - 1 && (
				<button
					className={`${styles.nav} ${styles.navRight}`}
					onClick={() => setActive((i) => i + 1)}
				>
					<CustomImage
						src="https://i.postimg.cc/s2R8d4y3/icons8-chevron-right-96.png"
						alt={'chevron_right'}
						width={72}
						height={72}
					/>
				</button>
			)}
		</div>
	);
};

Carousel.propTypes = {
	content: PropTypes.array,
};
