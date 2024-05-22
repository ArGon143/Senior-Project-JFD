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
							src="https://2.downloader.disk.yandex.ru/preview/4a2b7477498f27baaea2095e4cd6623418436d165ef064d304988e3021dcc0e0/inf/UXD444piXg2SaPNeHNItYGJcIpKEkISmQs3iF9UuGsQFXnGs6njTEZwcfghjMtWkeYLpzmhcByMkAfa0iGRSXw%3D%3D?uid=537849441&filename=Iconarchive-Rose-Yellow-Rose-2.512.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
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
						src="https://2.downloader.disk.yandex.ru/preview/195575014701bb39067fbfdfe141b5acea7aaf3fb4976ec0ebaa8ee8afb296f7/inf/k54RGfG7gCv_47e_3aVzbLH6uHqu7zViZLR1-3krZ60BQUn1tsOZhr-DHnF7j2vP0nVjSasA5Bj2YbYSo8Llbg%3D%3D?uid=537849441&filename=Rectangle%201.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
						alt={'flower'}
						width={175}
						height={175}
						margin={'10px'}
						padding={'0'}
						borderRadius={'10px'}
					/>
					<CustomImage
						src="https://2.downloader.disk.yandex.ru/preview/fe0520fd5272445e031bdb01f126d9db2521f1c9cbdbf018bb1635ae1dbe6d09/inf/ja1E42R1FbpfkpZmxnUNsXJhSCZ6AWTQCkemGDFblXyDlzGBkS958unB0sz7GXWb-SA1aMoG-YHs_Lvzc6o53Q%3D%3D?uid=537849441&filename=Rectangle%202.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
						alt={'flower'}
						width={175}
						height={175}
						margin={'10px'}
						padding={'0'}
						borderRadius={'10px'}
					/>
					<CustomImage
						src="https://3.downloader.disk.yandex.ru/preview/3e66a2fea78dac86c78b3399c4794233c226e28d1504a18641f0862cffeaa8a8/inf/oX418vPvNGwFGe34anFBV881o1_nXt9KnU_k1ewu9f7Dfn2WtK3Ff3g9eTwaeFBtfPWxZfMrI7UPuF_haoOIbg%3D%3D?uid=537849441&filename=Rectangle%203.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
						alt={'flower'}
						width={175}
						height={175}
						margin={'10px'}
						padding={'0'}
						borderRadius={'10px'}
					/>
					<CustomImage
						src="https://1.downloader.disk.yandex.ru/preview/658414f7298715598e3ff7a7c9bb76fdd40797836ddded52e375c62a4a2ef131/inf/lA1GAjcBX4UEoWLA4qhKJ828DUOQfWu4pm6yVzdK_oK8jAa7AjupPSNMqX0tt2vwoTHmNH6_GR5ga0eYAkDdSg%3D%3D?uid=537849441&filename=Rectangle%204.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
						alt={'flower'}
						width={175}
						height={175}
						margin={'10px'}
						padding={'0'}
						borderRadius={'10px'}
					/>
					<CustomImage
						src="https://3.downloader.disk.yandex.ru/preview/fa6a81f6d64f62e4cde6b8225eb387a506755cadd0040e7fa3bfbd5948807fa4/inf/10qjMrmwolIoWakCJfoQn7H6uHqu7zViZLR1-3krZ631eSqAfe1m-ab0PNHmHqcL_yBAVPGoSLVvi4TZ3Nb08w%3D%3D?uid=537849441&filename=Rectangle%205.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
						alt={'flower'}
						width={175}
						height={175}
						margin={'10px'}
						padding={'0'}
						borderRadius={'10px'}
					/>
					<CustomImage
						src="https://1.downloader.disk.yandex.ru/preview/f34c0834f05fcaa5a53c28c096fda54fc7ebe00455460a3cb313103ea1087d30/inf/b7C4xp8UoZGoK4wQR2q5bsJE43P53oGGuo38LXVuQ5PcuW68sFKSzkcCp8P8cTYGc0pbfS1aC3oimc-6fZyfng%3D%3D?uid=537849441&filename=Rectangle%206.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
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
