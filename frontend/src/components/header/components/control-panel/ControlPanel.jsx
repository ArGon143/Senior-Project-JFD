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
							src="https://i.postimg.cc/RC8gxLQ2/icons8-user-100.png"
							alt={'user'}
							width={22}
							height={22}
							padding={'0 2px 0 0'}
						/>
						<div>{login}</div>
					</Link>
					<Link to="/">
						<CustomImage
							src="https://i.postimg.cc/qBZ5MT0b/icons8-logout-64.png"
							alt={'logout'}
							width={35}
							height={35}
							padding={'0 10px 0 5px'}
							onClick={onLogout}
						/>
					</Link>
					<Link to="/cart">
						<CustomImage
							src="https://i.postimg.cc/JnzpMTFC/icons8-shopping-cart-96.png"
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
