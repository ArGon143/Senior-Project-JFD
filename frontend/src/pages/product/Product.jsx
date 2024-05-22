import { useMatch, useParams } from 'react-router-dom';
import { ProductComments, ProductContent, ProductForm } from './components';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../../store/selectors';
import { loadProductFetch, RESET_PRODUCT_DATA } from '../../store/actions';
import { Error } from '../../components';
import styles from './Product.module.css';

export const Product = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useDispatch();
	const params = useParams();
	const isCreating = useMatch('/products/newproduct');
	const isEditing = useMatch('/products/:id/edit');
	const product = useSelector(selectProduct);

	useLayoutEffect(() => {
		dispatch(RESET_PRODUCT_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}

		dispatch(loadProductFetch(params.id)).then((productData) => {
			setError(productData.error);
			setIsLoading(false);
		});
	}, [dispatch, params.id, isCreating]);

	if (isLoading) {
		return null;
	}

	const SpecificProductPage =
		isEditing || isCreating ? (
			<div className={styles.product}>
				<ProductForm product={product} />
			</div>
		) : (
			<div className={styles.product}>
				<ProductContent product={product} />
				<ProductComments comments={product.comments} productId={product.id} />
			</div>
		);

	return error ? <Error error={error} /> : SpecificProductPage;
};
