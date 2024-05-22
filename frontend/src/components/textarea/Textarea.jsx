import styles from './Textarea.module.css';
import PropTypes from 'prop-types';

export const Textarea = ({
	onChange,
	name,
	value,
	placeholder,
	width = '600px',
	height = '120px',
	margin,
	padding = '10px',
	borderRadius = '10px',
	outlineColor,
	fontSize = '18px',
	resize = 'none',
	...props
}) => {
	const textareaStyle = {
		width: width,
		height: height,
		margin: margin,
		padding: padding,
		borderRadius: borderRadius,
		outlineColor: outlineColor,
		fontSize: fontSize,
		resize: resize,
		background: props.background,
	};

	return (
		<textarea
			className={styles.textarea}
			style={textareaStyle}
			name={name}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
		></textarea>
	);
};

Textarea.propTypes = {
	onChange: PropTypes.func,
	name: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string,
	borderRadius: PropTypes.string,
	outlineColor: PropTypes.string,
	fontSize: PropTypes.string,
	resize: PropTypes.string,
	props: PropTypes.objectOf(PropTypes.string),
};
