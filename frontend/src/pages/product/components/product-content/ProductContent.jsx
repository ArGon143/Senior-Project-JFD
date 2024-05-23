import styles from './ProductContent.module.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button, CustomImage, H2 } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../../../store/selectors';
import { checkAccess } from '../../../../utils';
import { ROLE } from '../../../../constant';
import { addToCart, CLOSE_MODAL, openModal } from '../../../../store/actions';

export const ProductContent = ({ product }) => {
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);
	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	const dispatch = useDispatch();

	const addCart = (id) => {
		dispatch(
			openModal({
				text: `Товар "${product.title}" добавлен в корзину`,
				onConfirm: () => {
					dispatch(addToCart(id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={styles.productWrapper}>
			<div className={styles.productContent}>
				<CustomImage
					src={product.imageUrl}
					alt={'flower'}
					width={356}
					height={326}
					margin={'0'}
					padding={'0'}
					borderRadius={'10px'}
				/>
				<div className={styles.textContent}>
					<div
						style={{
							height: '40px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<H2
							children={product.title}
							width={'380px'}
							fontSize={'28px'}
							margin={'0'}
						/>
						{isAdmin && (
							<Button
								borderRadius={'5px'}
								width={'220px'}
								margin={'0 0 0 3rem'}
								children={'Редактировать товар'}
								onClick={() => navigate(`/products/${product.id}/edit`)}
							/>
						)}
					</div>
					<div className={styles.description}>{product.description}</div>
					<table className={styles.textAbout}>
						{product.specifications.map((specification) => (
							<thead key={specification.name}>
								<tr>
									<td>{specification.name}:</td>
									<td>{specification.value}</td>
								</tr>
							</thead>
						))}
					</table>
					<div className={styles.buttonsContentPanel}>
						<div className={styles.price}>{product.price} &#x20bd;/шт</div>
						<div
							className={styles.linkUpdate}
							onClick={() => addCart(product.id)}
						>
							<div className={styles.buttonBuy}>
								<CustomImage
									src="https://i.postimg.cc/jdmmvrFw/icons8-cart-96.png"
									alt={'cart'}
									width={21}
									height={21}
									padding={'0 10px 0 0'}
								/>
								<div>В корзину</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

ProductContent.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		age: PropTypes.number,
		imageUrl: PropTypes.string,
		description: PropTypes.string,
		specifications: PropTypes.object,
		count: PropTypes.number,
		selected: PropTypes.bool,
		bestSel: PropTypes.bool,
		publishedAt: PropTypes.object,
	}),
};
