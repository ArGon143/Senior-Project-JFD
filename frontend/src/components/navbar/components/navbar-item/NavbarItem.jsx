import { Link } from 'react-router-dom';
import styles from './NavbarItem.module.css';
import PropTypes from 'prop-types';

export const NavbarItem = ({ children, to = '', thema }) => {
	return (
		<Link
			className={thema === 'dark' ? styles.navbarItemDark : styles.navbarItemLight}
			to={to}
		>
			<div> {children}</div>
		</Link>
	);
};

NavbarItem.propTypes = {
	children: PropTypes.node,
	to: PropTypes.string,
	thema: PropTypes.string,
};
