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
						src="https://4.downloader.disk.yandex.ru/preview/1cff60f0d82b23cad33665a8777be61144b1cecdcf3b98183a0c25a86859ad2e/inf/lwbxNlzbQsVl4B6eqAfP-5N1FlIgz3Tuw4LhZ0PNsn_PdENQKevsXaZZTKb8oCqMYgJ_PF7Xd95LZO-8TVZIMQ%3D%3D?uid=537849441&filename=icons8-chevron-left-96.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
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
						src="https://2.downloader.disk.yandex.ru/preview/583bb7bdb1d4024cdca57f650ac404015c5b944bac73ec5bda12e8b8bf4a8931/inf/D3rD7LVz4pJTIDGXrXQo-cPxMe4kFGWwbmtHIBlP-NwMhqDp33qM-A6OSegLq52RsA-J28_1H9jsJa1n-xZwnA%3D%3D?uid=537849441&filename=icons8-chevron-right-96.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
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
