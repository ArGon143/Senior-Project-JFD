import styles from './NoContent.module.css';
import PropTypes from 'prop-types';

export const NoContent = ({ children, ...props }) => {
	const noContentStyle = {
		width: props.width,
		height: props.height,
		fontSize: props.fontSize,
		color: props.color,
		margin: props.margin,
	};

	return (
		<div className={styles.noContent} style={noContentStyle}>
			{children}
		</div>
	);
};

NoContent.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
	height: PropTypes.string,
	fontSize: PropTypes.string,
	color: PropTypes.string,
};
