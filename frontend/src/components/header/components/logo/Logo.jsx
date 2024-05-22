import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import { CustomImage } from '../../../сustom-image/СustomImage';
// import { IMG_URL } from '../../../../constants';

export const Logo = () => (
	<Link className={styles.logo} to="/">
		<div>
			<CustomImage
				src="https://3.downloader.disk.yandex.ru/preview/1611d7e0ef1315cea97da721e10f3359865912bcf8f6306ee4d938d010c36ef4/inf/xT7-nJbCK1zkfWomOh3REAAmItuUwjffF61VrBx6eDTQn7Vu_00izhH6KI7dPRx2hTvr12j_RaY5y1PR8IBnNA%3D%3D?uid=537849441&filename=Iconarchive-Rose-Purple-Rose-Blossom.512.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
				alt={'Logo'}
				width={70}
				height={70}
			/>
			<div className={styles.text}>
				<span className={styles.spanAccent}>Flowers</span> Shop
			</div>
		</div>
	</Link>
);
