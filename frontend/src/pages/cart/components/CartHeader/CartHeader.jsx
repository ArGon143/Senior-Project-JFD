import styles from './CartHeader.module.css';

export const CartHeader = () => {
	return (
		<header className={styles.cartHeader}>
			<div className={styles.cartHeaderTitle}>наименование</div>
			<div className={styles.cartHeaderCount}>количество</div>
			<div className={styles.cartHeaderCost}>стоимость</div>
		</header>
	);
};
