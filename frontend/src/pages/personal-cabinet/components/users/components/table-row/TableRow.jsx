import PropTypes from 'prop-types';
import styles from './TableRow.module.css';

export const TableRow = ({ children }) => (
	<div className={styles.tableRow}>{children}</div>
);

TableRow.propTypes = {
	children: PropTypes.node.isRequired,
};
