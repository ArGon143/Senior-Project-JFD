import styles from './CustomImage.module.css';

import PropTypes from 'prop-types';
import React from 'react';

export const CustomImage = ({
	padding = '5px 0px',
	margin = 'auto',
	borderRadius,
	...props
}) => {
	const imgStyle = {
		margin: margin,
		padding: padding,
		borderRadius: borderRadius,
		cursor: props.cursor,
	};

	return (
		<img
			className={styles.img}
			style={imgStyle}
			src={props.src}
			alt={props.alt}
			{...props}
		/>
	);
};

CustomImage.propTypes = {
	props: PropTypes.objectOf(PropTypes.string),
	margin: PropTypes.string,
	padding: PropTypes.string,
	borderRadius: PropTypes.string,
};
