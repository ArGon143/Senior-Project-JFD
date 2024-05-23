import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';
import { CustomImage } from '../сustom-image/СustomImage';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions';

export const ProductCard = ({ product, ...props }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const addCart = (id) => {
		dispatch(addToCart(id));
	};

	return (
		<div className={styles.card}>
			<div
				className={styles.cardWrapper}
				onClick={() => navigate(`/products/${product.id}`)}
			>
				<CustomImage
					key={product.image}
					className={styles.cardImg}
					src={product.imageUrl}
					alt={'flower'}
					width={236}
					height={215}
					margin={'0 auto 10px auto'}
					padding={'0'}
					borderRadius={'10px'}
				/>
				<p className={`${styles.text} ${styles.title}`}>{product.title}</p>
				<table className={`${styles.text} ${styles.small} ${styles.textAbout}`}>
					{product.specifications.map((item) => (
						<thead key={item.name}>
							<tr>
								<td>{item.name}:</td>
								<td>{item.value}</td>
							</tr>
						</thead>
					))}
				</table>
				<p className={`${styles.text} ${styles.small} ${styles.price}`}>
					Цена: {product.price} &#x20bd;/шт
				</p>
			</div>
			<div className={styles.linkUpdate} onClick={() => addCart(product.id)}>
				<CustomImage
					src="https://i.postimg.cc/JnzpMTFC/icons8-shopping-cart-96.png"
					alt={'cart'}
					width={21}
					height={21}
					padding={'0 5px 0 0'}
				/>
				<div>В корзину</div>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
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
	props: PropTypes.objectOf(PropTypes.string),
};
