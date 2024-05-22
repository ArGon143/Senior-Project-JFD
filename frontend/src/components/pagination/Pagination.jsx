import PropTypes from 'prop-types';
import styles from './Pagination.module.css';

export const Pagination = ({ paginationParams, margin = '2rem 0 2rem 0' }) => {
	const paginationStyle = {
		margin,
	};

	return (
		<div className={styles.pagination} style={paginationStyle}>
			<div className={styles.nav}>
				<button
					className={styles.moveButton}
					onClick={paginationParams.prePage}
					autoFocus
					disabled={paginationParams.currentPage === 1}
				>
					&laquo;
				</button>
				{paginationParams.numbers.map((number, index) => (
					<button
						className={
							paginationParams.currentPage === number
								? `${styles.moveButton} ${styles.active} `
								: styles.moveButton
						}
						key={index}
						onClick={() => paginationParams.changeCPage(number)}
					>
						{number}
					</button>
				))}
				<button
					className={`${styles.moveButton} ${styles.modal}`}
					onClick={paginationParams.nextPage}
					disabled={
						paginationParams.currentPage === paginationParams.numberPage
					}
				>
					&raquo;
				</button>
			</div>
		</div>
	);
};

Pagination.propTypes = {
	paginationParams: PropTypes.object,
	margin: PropTypes.string,
};
