import styles from './Products.module.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { usePagination } from '../../hooks';
import {
	Button,
	CustomImage,
	Input,
	Pagination,
	ProductCard,
	ProductList,
} from '../../components';
import { SortPanel } from './components';
import { checkAccess } from '../../utils';
import { ROLE } from '../../constant';
import { SORT_OPTIONS } from './constants';
import { changeSearchResult, searchResult, sortResult } from '../../store/actions';
import {
	selectProducts,
	selectSearchResult,
	selectSearchTerm,
	selectSortResult,
	selectUserRole,
} from '../../store/selectors';

export const Products = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const products = useSelector(selectProducts);
	const roleId = useSelector(selectUserRole);
	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	const sortProducts = useSelector(selectSortResult);
	const [sorting, setSorting] = useState('titleASC');
	const searchProductTerm = useSelector(selectSearchTerm);
	const searchProductResult = useSelector(selectSearchResult);

	useEffect(() => {
		const sortObJ = SORT_OPTIONS.find((option) => option.value === sorting);
		if (sortObJ) {
			dispatch(sortResult(sortObJ.sort(products)));
		}
	}, [sorting, dispatch, products, setSorting]);

	useEffect(() => {
		const results = sortProducts.filter((item) =>
			item.title.toLowerCase().includes(searchProductTerm.toLowerCase()),
		);
		dispatch(searchResult(results));
	}, [dispatch, searchProductTerm, sortProducts]);

	const handleSort = (e) => {
		setSorting(e.target.value);
	};

	const handleSearchChange = (event) => {
		dispatch(changeSearchResult(event.target.value));
	};

	let productsList;

	if (searchProductResult) {
		productsList = searchProductResult;
	} else productsList = products;

	const paginationProducts = usePagination(productsList, 4);

	return (
		<div className={styles.products}>
			<div className={styles.specialPanel}>
				{!isAdmin ? (
					<div style={{ width: '170px' }}></div>
				) : (
					<Button
						borderRadius={'5px'}
						width={'170px'}
						margin={'0 0 0 3rem'}
						children={'Добавить товар'}
						onClick={() => navigate('/products/newproduct')}
					/>
				)}
				<div className={styles.searchPanel}>
					<Input
						type="text"
						placeholder="Поиск..."
						height={'40px'}
						width={'520px'}
						fontSize={'18px'}
						margin={'0'}
						background={'none'}
						value={searchProductTerm}
						onChange={handleSearchChange}
					/>
					<CustomImage
						className={styles.searchImg}
						src="https://4.downloader.disk.yandex.ru/preview/3c6000e5b1d926debaf78543ea2eb410c87a2bee1e36152f473334980f9d1403/inf/THp3L1WpaHp8kkJuQlN9Y8kaOFFSU3lenLz-m220W4lCaIUN7XkWueiBrSy4hwa2CC5MQRuj4i_mxs3Mu-111w%3D%3D?uid=537849441&filename=icons8-search-128.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
						alt={'search'}
						width={40}
						height={40}
						margin={'0'}
						padding={'0'}
					/>
				</div>
				<SortPanel options={SORT_OPTIONS} onSort={handleSort} value={sorting} />
			</div>
			<ProductList>
				{paginationProducts.records.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</ProductList>
			{paginationProducts.numberPage <= 1 ? (
				<></>
			) : (
				<Pagination paginationParams={paginationProducts} margin={'2rem 0 0 0'} />
			)}
		</div>
	);
};
