import styles from './ButtonStyles.module.css';
import PropTypes from 'prop-types';

export const Button = ({
	width = '150px',
	height = '40px',
	fontSize = '18px',
	border = 'none',
	margin,
	borderRadius,
	onClick,
	name,
	children,
	...props
}) => {
	const buttonStyle = {
		borderRadius: borderRadius,
		width,
		height,
		border,
		fontSize,
		margin,
	};

	return (
		<button
			className={styles.buttonStyle}
			style={buttonStyle}
			name={name}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	color: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	onClick: PropTypes.func,
	name: PropTypes.string,
	type: PropTypes.string,
	children: PropTypes.node,
	props: PropTypes.objectOf(PropTypes.string),
};
