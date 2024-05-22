import { useDispatch, useSelector } from 'react-redux';
import { H2, NoContent } from '../../../../components';
import styles from './PurchaseHistory.module.css';
import { selectPurchaseData, selectUserLogin } from '../../../../store/selectors';
import { loadPurchaseDataFetch } from '../../../../store/actions';
import { useEffect } from 'react';
import { TableRow } from '../users/components';

export const PurchaseHistory = () => {
	const dispatch = useDispatch();
	const purchaseHistory = useSelector(selectPurchaseData);
	const user = useSelector(selectUserLogin);

	console.log(purchaseHistory.lenght === 0);

	useEffect(() => {
		dispatch(loadPurchaseDataFetch());
	}, [dispatch]);

	const totalPrice = [];

	const data = purchaseHistory.filter((item) => item.author === user);

	data.map((item) => totalPrice.push(item.data[0].totalPrice));
	console.log(totalPrice.reduce((sum, current) => sum + current, 0));

	return (
		<div className={styles.purchaseHistory}>
			{purchaseHistory.lenght === 0 ? (
				<NoContent
					children={'Вы еще ничего не покупали в нашем магазине'}
					margin={'6rem 0 0 12rem'}
					color={'#838383'}
				/>
			) : (
				<>
					<H2
						fontSize={'28px'}
						margin={'0 0 2rem 0'}
						children={'История покупок'}
					/>

					<div className={styles.usersWrapper}>
						<TableRow>
							<div
								className={styles.tableTitle}
								style={{ fontWeight: 'bold', marginBottom: '1rem' }}
							>
								Наименование
							</div>
							<div
								className={styles.tableTitle}
								style={{ fontWeight: 'bold', marginBottom: '1rem' }}
							>
								Количество (шт.)
							</div>
							<div
								className={styles.tableTitle}
								style={{ fontWeight: 'bold' }}
							>
								Cтоимость за единицу
							</div>
						</TableRow>
						<div
							className={styles.usersWrapper}
							style={{ width: '480px', textAlign: 'center' }}
						>
							{data.map((item) =>
								item.data[0].cart.map((item) => (
									<div key={item.id}>
										<div style={{ display: 'flex' }}>
											<div className={styles.tableTitle}>
												{item.title}
											</div>
											<div className={styles.tableTitle}>
												{item.count}
											</div>
											<div className={styles.tableTitle}>
												{item.price} &#x20bd;
											</div>
										</div>
									</div>
								)),
							)}
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							marginTop: '2rem',
							marginRight: '4rem',
							fontSize: '23px',
							justifyContent: 'flex-end',
						}}
					>
						<div style={{ fontWeight: 'bold', marginRight: '2rem' }}>
							Всего потрачено:
						</div>
						<div style={{ fontWeight: 'bold', color: '#ff8f52' }}>
							{totalPrice.reduce((sum, current) => sum + current, 0)}{' '}
							&#x20bd;
						</div>
					</div>
				</>
			)}
		</div>
	);
};
