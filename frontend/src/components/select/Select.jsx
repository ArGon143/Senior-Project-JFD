import styles from './Select.module.css';

import PropTypes from 'prop-types';

export const Select = ({ value, onChange, children, ...props }) => {
	return (
		<select className={styles.select} value={value} onChange={onChange} {...props}>
			{children}
		</select>
	);
};

Select.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	children: PropTypes.node,
	props: PropTypes.objectOf(PropTypes.string),
};
