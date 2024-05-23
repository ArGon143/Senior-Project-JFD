import { CustomImage, H2 } from '../../components';
import styles from './AboutUs.module.css';

export const AboutUs = () => {
	return (
		<div className={styles.main}>
			<H2>
				Магазин цветов <span className={styles.accent}>Flowers Shop</span>
			</H2>
			<div className={`${styles.content} ${styles.text}`}>
				<CustomImage
					src="https://i.postimg.cc/bvQ7sFLG/5jeg16zfkgl4g2e6ak06dygefu501iik.webp"
					alt={'shop'}
					width={500}
					height={380}
					margin={'0 20px 0 0'}
					padding={'0'}
					borderRadius={'10px'}
				/>
				<div>
					<span className={styles.accent}>Flowers Shop</span> – абсолютно новый
					для России формат магазина цветов. Магазин начала работу в апреле 2011
					года. Каждый год с апреля по август открываются сезонные площадки.
					<br />
					Мы предлагаем нашим покупателям более 1000 цветов, подобранных с
					учётом потребностей всех категорий покупателей. Есть редкие растения,
					ввезённые в Россию в единственном числе.
					<br />
					В каталоге интернет магазина вы всегда можете найти: уличные растения
					для вашего сада от ведущих питомников России и мира.
					<br />
				</div>
			</div>
			<div className={styles.text}>
				<span className={styles.accent}>Наша цель</span> – достижение
				максимального результата в адекватные сроки и за разумные деньги.
			</div>
		</div>
	);
};
