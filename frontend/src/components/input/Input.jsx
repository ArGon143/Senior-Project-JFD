import styles from './Input.module.css';

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

export const Input = forwardRef(({ width = '100%', name, type, ...props }, ref) => {
	const inputStyle = {
		width: width,
		height: props.height,
		margin: props.margin,
		fontSize: props.fontSize,
		background: props.background,
		borderRadius: props.borderRadius,
		padding: props.padding,
		border: props.border,
		outline: props.outline,
		cursor: props.cursor,
	};
	return (
		<input
			className={styles.input}
			type={type}
			name={name}
			{...props}
			ref={ref}
			style={inputStyle}
		/>
	);
});

Input.propTypes = {
	width: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	props: PropTypes.objectOf(PropTypes.string),
};
