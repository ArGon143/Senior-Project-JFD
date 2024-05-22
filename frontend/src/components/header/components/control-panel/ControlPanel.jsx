import { Link, useNavigate } from 'react-router-dom';
import styles from './ControlPanel.module.css';
import { CustomImage } from '../../../сustom-image/СustomImage';
import { Button } from '../../../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserLogin, selectUserRole } from '../../../../store/selectors';
import { ROLE } from '../../../../constant';
import { logout } from '../../../../store/actions';

export const ControlPanel = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const userRole = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);

	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
	};

	const isGuest = userRole === ROLE.GUEST;

	return (
		<div className={styles.controlPanel}>
			{isGuest ? (
				<Button
					borderRadius={'5px'}
					width={'200px'}
					children={'Вход / Регистрация'}
					onClick={() => navigate('/login')}
				/>
			) : (
				<>
					<Link to="/personal_cabinet" className={styles.userName}>
						<CustomImage
							src="https://3.downloader.disk.yandex.ru/preview/fd54b60d8119ce28e71dc5ba9f62654c7eb450296b596af5d427a93695ece619/inf/JY2wIbMgncCREzTmgoFyOSkbOxVs7_hMviADKPnzUSxR13nv2-36UPXCEYKh81I4Lf1onfbZZvwFBP7-8tE5Uw%3D%3D?uid=537849441&filename=icons8-user-100.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1901x933"
							alt={'user'}
							width={22}
							height={22}
							padding={'0 2px 0 0'}
						/>
						<div>{login}</div>
					</Link>
					<Link to="/">
						<CustomImage
							src="https://4.downloader.disk.yandex.ru/preview/acba650f48754359dfe9030709fc55b96a01641e17a273e0fa2c24544186b427/inf/JeAweO9vY8_jIwPfhVxuf_29INink-fB1sCF6ozfS9a5cLTpfBXvm_8qt9MG38GyjDRtnymhlnIq1QQ0rqRzQg%3D%3D?uid=537849441&filename=icons8-logout-64.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1901x933"
							alt={'logout'}
							width={35}
							height={35}
							padding={'0 10px 0 5px'}
							onClick={onLogout}
						/>
					</Link>
					<Link to="/cart">
						<CustomImage
							src="https://4.downloader.disk.yandex.ru/preview/d573d512d6b2219af49cf9de4c9558aceda51434280728883c0970b034c02284/inf/5pwYAyHQS5nnFyoI0T5N2MWOElpuwvWMh_P0_3mcf9LoZva1bXRf6uEgljGerMkYnMJQ43u2UstVkgL7WhbrRg%3D%3D?uid=537849441&filename=icons8-shopping-cart-96.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1901x933"
							alt={'cart'}
							width={30}
							height={30}
							padding={'0 0 0 10px'}
						/>
					</Link>
				</>
			)}
		</div>
	);
};
