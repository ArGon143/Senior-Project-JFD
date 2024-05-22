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
						src="https://4.downloader.disk.yandex.ru/preview/358e715958160796dfa0a79b5c41e34b8304f93ca10f24e7f8e5a735588d3529/inf/To_SXWYfSggbEZ4LofubRk4uhcZU5ZO8JGC9WdmpL3IgXPcJxOCZ2GLVxo5ymP3FPvPfdSrdkvlNaNJimmL3lw%3D%3D?uid=537849441&filename=cart_emty.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
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
