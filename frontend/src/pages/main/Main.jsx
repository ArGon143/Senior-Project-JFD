import styles from './Main.module.css';

import { useNavigate } from 'react-router-dom';
import {
	H2,
	CustomImage,
	Button,
	ProductList,
	ProductCard,
	Pagination,
	Carousel,
	NoContent,
} from '../../components';
import { usePagination } from '../../hooks';
import { useSelector } from 'react-redux';
import { selectProducts, selectReviews } from '../../store/selectors';

export const Main = () => {
	const navigate = useNavigate();
	const products = useSelector(selectProducts);
	const reviews = useSelector(selectReviews);

	const bestSelProducts = products.filter((product) => product.bestSel === true);

	const paginationProducts = usePagination(bestSelProducts, 4);

	return (
		<div className={styles.mainWrapper}>
			<div className={styles.mainFirstPageWrapper}>
				<div className={styles.mainFirstPageWrapperLeft}>
					<H2 fontWeight={'600'} margin={'0 0 3.5rem 0'}>
						Цветы{' '}
						<CustomImage
							src="https://i.postimg.cc/dQWzkCR9/Iconarchive-Rose-Yellow-Rose-2-512.png"
							alt={'flower'}
							width={40}
							height={40}
						/>{' '}
						- это улыбка солнца, которая дарит радость
					</H2>
					<p className={styles.mainFirstPageText}>
						Выберите цветы из нашего широкого ассортимента
					</p>
					<Button
						borderRadius={'5px'}
						width={'120px'}
						children={'Выбрать'}
						onClick={() => navigate('/products')}
					/>
				</div>
				<div className={styles.mainFirstPageWrapperRight}>
					<CustomImage
						src="https://i.postimg.cc/kGXPrFQ2/Rectangle-1.png"
						alt={'flower'}
						width={175}
						height={175}
						margin={'10px'}
						padding={'0'}
						borderRadius={'10px'}
					/>
					<CustomImage
						src="https://i.postimg.cc/bY3jxWPk/Rectangle-2.png"
						alt={'flower'}
						width={175}
						height={175}
						margin={'10px'}
						padding={'0'}
						borderRadius={'10px'}
					/>
					<CustomImage
						src="https://i.postimg.cc/ZKnzVHYg/Rectangle-3.png"
						alt={'flower'}
						width={175}
						height={175}
						margin={'10px'}
						padding={'0'}
						borderRadius={'10px'}
					/>
					<CustomImage
						src="https://i.postimg.cc/ncWb5mCL/Rectangle-4.png"
						alt={'flower'}
						width={175}
						height={175}
						margin={'10px'}
						padding={'0'}
						borderRadius={'10px'}
					/>
					<CustomImage
						src="https://i.postimg.cc/j2g0RwcZ/Rectangle-5.png"
						alt={'flower'}
						width={175}
						height={175}
						margin={'10px'}
						padding={'0'}
						borderRadius={'10px'}
					/>
					<CustomImage
						src="https://i.postimg.cc/pLnbtdFJ/Rectangle-6.png"
						alt={'flower'}
						width={175}
						height={175}
						margin={'10px'}
						padding={'0'}
						borderRadius={'10px'}
					/>
				</div>
			</div>
			<div className={styles.mainPageWrapper}>
				<div className={styles.titleWrapper}>
					<div className={styles.borderTitle}></div>
					<H2
						fontWeight={'400'}
						fontSize={'32px'}
						textAlign={'center'}
						margin={'0'}
						width={'270px'}
						fontVariant={'normal'}
						children={'Топ продаж'}
					/>
					<div className={styles.borderTitle}></div>
				</div>
				{bestSelProducts.length === 0 ? (
					<NoContent className={styles.noContent} children={'Нет товаров'} />
				) : (
					<>
						<ProductList>
							{paginationProducts.records.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</ProductList>
						<div>
							{paginationProducts.numberPage <= 1 ? (
								<></>
							) : (
								<Pagination
									paginationParams={paginationProducts}
									margin={'2rem 0 0 0'}
								/>
							)}
						</div>
					</>
				)}
			</div>
			<div className={styles.mainPageWrapper}>
				<div className={styles.titleWrapper}>
					<div className={styles.borderTitle}></div>
					<H2
						fontWeight={'400'}
						fontSize={'32px'}
						textAlign={'center'}
						margin={'0'}
						width={'270px'}
						fontVariant={'normal'}
						children={'Отзывы о нас'}
					/>
					<div className={styles.borderTitle}></div>
				</div>
				<Carousel content={reviews} />
			</div>
		</div>
	);
};
