import styles from './CartFooter.module.css';

import { Button } from '../../../../components';
import formatPrice from './../../utils/priceFormatter';
import {
	clearCart,
	CLOSE_MODAL,
	openModal,
	addCartDataFetch,
} from '../../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../../../../store/selectors';

export const CartFooter = ({ total }) => {
	const dispatch = useDispatch();
	const cart = useSelector(selectCart);

	const totalPrice = total.price;

	const onOrder = () => {
		dispatch(
			openModal({
				text: `Сделать заказ?`,
				onConfirm: () => {
					dispatch(addCartDataFetch({ data: { cart, totalPrice } }));
					dispatch(clearCart());
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<footer className={styles.cartFooter}>
			<div style={{ gridColumnStart: 2, fontSize: '22px' }}>Итого:</div>
			<div className={styles.cartFooterCount}>{total.count} ед.</div>
			<div className={styles.cartFooterPrice}>
				{formatPrice(total.price)} &#x20bd;
			</div>
			<Button
				width={'120px'}
				margin={'0'}
				borderRadius={'5px'}
				children={'Заказать'}
				onClick={onOrder}
			/>
		</footer>
	);
};
