import styles from './Navbar.module.css';
import { NavbarItem } from './components';
import PropTypes from 'prop-types';

export const Navbar = ({
	navPath,
	flexFlow = 'row nowrap',
	fontSize = '18px',
	thema = 'dark',
}) => {
	const navbarStyle = {
		flexFlow: flexFlow,
		fontSize: fontSize,
	};

	return (
		<div className={styles.navbar} style={navbarStyle}>
			{navPath.map(({ path, label }) => (
				<NavbarItem key={path} to={path} thema={thema}>
					{label}
				</NavbarItem>
			))}
		</div>
	);
};

NavbarItem.propTypes = {
	navPath: PropTypes.array,
	flexFlow: PropTypes.string,
	fontSize: PropTypes.string,
	thema: PropTypes.string,
};
