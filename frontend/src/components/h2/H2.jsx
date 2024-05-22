import styles from './H2.module.css';

import PropTypes from 'prop-types';

export const H2 = ({
	children,
	color = '#1f2937',
	fontSize = '38px',
	margin = '0 0 3rem 0',
	fontWeight = 'bold',
	width = '100%',
	height,
	textAlign,
	fontVariant,
	...props
}) => {
	const h2Style = {
		fontSize: fontSize,
		color: color,
		margin: margin,
		fontWeight: fontWeight,
		width: width,
		height: height,
		textAlign: textAlign,
		fontVariant: fontVariant,
	};
	return (
		<h2 className={styles.h2} style={h2Style} {...props}>
			{children}
		</h2>
	);
};

H2.propTypes = {
	children: PropTypes.node.isRequired,
	color: PropTypes.string,
	fontSize: PropTypes.string,
	margin: PropTypes.string,
	fontWeight: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	textAlign: PropTypes.string,
	fontVariant: PropTypes.string,
	props: PropTypes.objectOf(PropTypes.string),
};
