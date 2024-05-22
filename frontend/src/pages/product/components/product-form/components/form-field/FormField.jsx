import PropTypes from 'prop-types';
import { H2, Input } from '../../../../../../components';
import styles from './FormField.module.css';

export const FormField = ({ value, onChange, nameField, placeholder }) => {
	return (
		<div className={styles.formField}>
			<H2
				children={nameField}
				width={'150px'}
				height={'40px'}
				fontWeight={'normal'}
				fontVariant={'normal'}
				fontSize={'18px'}
				margin={'auto 0'}
				padding={'0'}
			/>
			<Input
				width={'600px'}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

FormField.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	nameField: PropTypes.string,
	placeholder: PropTypes.string,
};
