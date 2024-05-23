import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import { CustomImage } from '../../../сustom-image/СustomImage';
// import { IMG_URL } from '../../../../constants';

export const Logo = () => (
	<Link className={styles.logo} to="/">
		<div>
			<CustomImage
				src="https://i.postimg.cc/Bbvk7Z3D/Iconarchive-Rose-Purple-Rose-Blossom-512.png"
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
