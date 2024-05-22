import styles from './Header.module.css';
import { ControlPanel, Logo } from './components';
import { Navbar } from '../navbar/Navbar';
import { navPath } from '../../constant';

export const Header = () => (
	<div className={styles.header}>
		<Logo />
		<Navbar navPath={navPath} />
		<ControlPanel />
	</div>
);
