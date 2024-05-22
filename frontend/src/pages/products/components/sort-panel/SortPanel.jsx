import { Select } from '../../../../components';
import styles from './SortPanel.module.css';
import PropTypes from 'prop-types';

export const SortPanel = ({ value, onSort, options }) => {
	return (
		<div className={styles.sortPanel}>
			<Select name={'choice'} value={value} onChange={onSort}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</Select>
		</div>
	);
};

SortPanel.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	nameField: PropTypes.string,
	placeholder: PropTypes.string,
};
