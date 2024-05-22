import PropTypes from 'prop-types';
import styles from './ProductList.module.css';

export const ProductList = ({ children }) => {
	return <div className={styles.productList}>{children}</div>;
};

ProductList.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
