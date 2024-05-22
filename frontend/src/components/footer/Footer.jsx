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
						src="https://4.downloader.disk.yandex.ru/preview/fc5ddab35e2a6a77c2f00ce3424e5fad07e82a2509cd077ecf01db2e919d6bdc/inf/lmmiynaqknS06rEuWV8fgIDpKw4zjSKKfK4nM1-6nM5fh-huJQcijlwFXIgzokqknuwcgaexRSuTMchHLY7tvg%3D%3D?uid=537849441&filename=icons8-location-100.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1901x933"
						alt={'location'}
						width={20}
						height={20}
						padding={'0 5px 0 0'}
					/>
					Москва, Свободный проспект, 33
				</a>
				<a className={styles.footerLink} href="mailto:FlowersShop@mail.ru">
					<CustomImage
						src="https://1.downloader.disk.yandex.ru/preview/ef15b68defdd610aac800773901376aec3b5450ed03c81c856cdfa94c50534e9/inf/g0QQH2gCU_xZo-9Fk9Lr9t90hS01kJyN_45GIK_rjawLyoHK4FSHBKE2ze93NAGjUyjUkqHqY4zmOGUlcDcUpQ%3D%3D?uid=537849441&filename=icons8-email-90.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1901x933"
						alt={'location'}
						width={20}
						height={20}
						padding={'0 5px 0 0'}
					/>
					FlowersShop@mail.ru
				</a>
				<a className={styles.footerLink} href="tel:84959999999">
					<CustomImage
						src="https://1.downloader.disk.yandex.ru/preview/161c4ec9fe4aeeaab87dd3c4b27c4baeba194ecff4c9c00db2749e93a3e39704/inf/8j-z1oem7CgOA7oX5r9cxT_ZYYesvdqFaZOS_Cfmnd7WhVexbwlFcyPjwXcqCVyw_kx_eUXeoXMwfdX_8OQP4g%3D%3D?uid=537849441&filename=icons8-phone-100.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1901x933"
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
