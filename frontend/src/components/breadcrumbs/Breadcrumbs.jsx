import styles from './Breadcrumbs.module.css';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { CustomImage } from '../сustom-image/СustomImage';

export const Breadcrumbs = ({
	fontSize = '18px',
	margin = '8rem 0 0 0',
	padding = '0 2rem 0 2rem',
	routesPath,
	data,
}) => {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter((x) => x);
	let breadcrumbPath = '';

	const breadcrumbsStyle = {
		fontSize,
		margin,
		padding,
	};

	return (
		<div className={styles.breadcrumbs} style={breadcrumbsStyle}>
			<Link to="/">
				<CustomImage
					src="https://i.postimg.cc/kGDYFjNv/icons8-home-64.png"
					alt={'home'}
					width={21}
					height={21}
					padding={'0 5px 0 0'}
				/>
				Главная{' '}
			</Link>
			{pathnames.map((name, index) => {
				breadcrumbPath += `/${name}`;

				routesPath.map((item) => {
					if (breadcrumbPath === item.path) {
						name = item.label;
					}
					return name;
				});

				data.map((item) => {
					if (name === item.id) {
						name = item.title;
					}
					return name;
				});

				const isLast = index === pathnames.length - 1;

				return isLast ? (
					<span key={breadcrumbPath}>
						/ <span style={{ fontWeight: 'bold' }}> {name} </span>
					</span>
				) : (
					<span key={breadcrumbPath}>
						/ <Link to={breadcrumbPath}> {name} </Link>
					</span>
				);
			})}
		</div>
	);
};

Breadcrumbs.propTypes = {
	fontSize: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string,
	routesPath: PropTypes.array,
	data: PropTypes.array,
};
