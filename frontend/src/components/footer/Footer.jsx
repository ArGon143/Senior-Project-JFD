import { navPath } from '../../constant';
import { Navbar } from '../navbar/Navbar';
import styles from './Footer.module.css';
import { CustomImage } from '../сustom-image/СustomImage';

export const Footer = () => {
	const footerNavPath = navPath.concat({
		path: '/login',
		label: 'Вход / Регистрация',
	});

	return (
		<div className={styles.footer}>
			<div className={styles.footerWrapperLeft}>
				<div className={styles.title}>
					<span className={styles.spanAccent}>Flowers</span> Shop
				</div>
				<div className={styles.footerText}>
					Интернет-магазин "Flowers Shop" организован на базе оптового магазина,
					что позволяет держать цены на уровне ниже-среднего, а также
					обслуживать большое количество заказов. Мы работаем с прямым
					поставщиком, поэтому можем гарантировать качество и свежесть наших
					цветов.
				</div>
			</div>
			<div className={styles.footerWrapperMiddle}>
				<div className={styles.titleMiddle}>Ссылки</div>
				<Navbar
					navPath={footerNavPath}
					flexFlow={'column nowrap'}
					thema={'light'}
				/>{' '}
			</div>
			<div className={styles.footerWrapperRight}>
				<div className={styles.titleRight}>Контакты</div>
				<a
					className={styles.footerLink}
					target="_blank"
					rel="noopener noreferrer"
					href="https://yandex.ru/maps/-/CDV-NNnm"
				>
					<CustomImage
						src="https://i.postimg.cc/GtN7Mkqw/icons8-location-100.png"
						alt={'location'}
						width={20}
						height={20}
						padding={'0 5px 0 0'}
					/>
					Москва, Свободный проспект, 33
				</a>
				<a className={styles.footerLink} href="mailto:FlowersShop@mail.ru">
					<CustomImage
						src="https://i.postimg.cc/Kz0sTXTY/icons8-email-90.png"
						alt={'location'}
						width={20}
						height={20}
						padding={'0 5px 0 0'}
					/>
					FlowersShop@mail.ru
				</a>
				<a className={styles.footerLink} href="tel:84959999999">
					<CustomImage
						src="https://i.postimg.cc/zGTtjHh6/icons8-phone-100.png"
						alt={'location'}
						width={20}
						height={20}
						padding={'0 5px 0 0'}
					/>
					8 (495) 999-99-99
				</a>
			</div>
		</div>
	);
};
