import { Count } from '../Count/Count';
import formatPrice from '../../utils/priceFormatter';
import styles from './ProductCart.module.css';
import { CustomImage } from '../../../../components';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../../store/actions';
import PropTypes from 'prop-types';

export const ProductCart = ({ product }) => {
	const dispatch = useDispatch();

	const priceTotal = product.price * product.count;

	const deleteProduct = (id) => {
		dispatch(removeFromCart(id));
	};

	return (
		<section className={styles.product}>
			<div className={styles.productImg}>
				<CustomImage
					src={product.imageUrl}
					alt={product.title}
					borderRadius={'10px'}
					width={70}
					height={70}
					margin={''}
					padding={'0'}
				/>
			</div>
			<div>{product.title}</div>
			<div>
				<Count count={product.count} id={product.id} />
			</div>
			<div>{formatPrice(priceTotal)} &#x20bd;</div>
			<div className={styles.productControls}>
				<CustomImage
					src="https://i.postimg.cc/50Kn0BcY/icons8-trash-96.png"
					alt={'trash'}
					width={40}
					height={40}
					margin={'0 0 0 10px'}
					padding={'0'}
					cursor={'pointer'}
					onClick={() => {
						deleteProduct(product.id);
					}}
				/>
			</div>
		</section>
	);
};

ProductCart.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		age: PropTypes.number,
		imageUrl: PropTypes.string,
		description: PropTypes.string,
		count: PropTypes.number,
		selected: PropTypes.bool,
		bestSel: PropTypes.bool,
		publishedAt: PropTypes.string,
	}),
};
