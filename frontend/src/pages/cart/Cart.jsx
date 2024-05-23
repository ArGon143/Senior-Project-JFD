import styles from './Cart.module.css';

import { useEffect, useState } from 'react';
import { CartHeader, CartFooter, ProductCart } from './components';
import { CustomImage } from '../../components';
import { useSelector } from 'react-redux';
import { selectCart } from '../../store/selectors';

export const Cart = () => {
	const cart = useSelector(selectCart);

	const [total, setTotal] = useState({
		count: cart.reduce((prev, curr) => prev + curr.count, 0),
		price: cart.reduce((prev, curr) => prev + curr.price, 0),
	});

	useEffect(() => {
		const totalPrice = [];

		cart.map((product) => {
			return totalPrice.push(product.price * product.count);
		});

		setTotal({
			count: cart.reduce((prev, curr) => prev + curr.count, 0),
			price: totalPrice.reduce((prev, curr) => prev + curr, 0),
		});
	}, [cart]);

	return (
		<>
			{cart.length === 0 ? (
				<div className={styles.cartEmpty}>
					<CustomImage
						src="https://i.postimg.cc/9f53XjP5/cart-emty.png"
						alt={'cartEmpty'}
						width={258}
						height={234}
						margin={'0 auto'}
						padding={'0'}
					/>
					<div className={styles.cartEmptyText}>Корзина пуста</div>
				</div>
			) : (
				<div className={styles.cart}>
					<CartHeader />
					{cart.map((product) => {
						return <ProductCart product={product} key={product.id} />;
					})}
					<CartFooter total={total} />
				</div>
			)}
		</>
	);
};
