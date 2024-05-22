import styles from './FlowerShop.module.css';

import withRouterAndProviderApp from './HOC/withRouterProviderApp';
import { Route, Routes } from 'react-router-dom';
import { routesPath } from './routes';
import { Breadcrumbs, Footer, Header, Loader, Modal, ScrollToTop } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useLayoutEffect } from 'react';
import { loadProductsFetch, loadReviewsFetch, setCart, setUser } from './store/actions';
import { ProtectedRouteIsRole } from './components/protected-route-is-role/ProtectedRouteIsRole';
import { selectIsLoading, selectProducts } from './store/selectors';

const FlowerShop = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);
	const products = useSelector(selectProducts);

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);

	useEffect(() => {
		dispatch(loadProductsFetch());
		dispatch(loadReviewsFetch());
	}, [dispatch]);

	useEffect(() => {
		dispatch(setCart(products.filter((product) => product.selected === true)));
	}, [dispatch, products]);

	return (
		<div className={styles.wrapperApp}>
			<div className={styles.appColumn}>
				<ScrollToTop />
				<Header />
				{isLoading ? (
					<Loader />
				) : (
					<>
						<Breadcrumbs
							padding={'0 4rem 0 4rem'}
							routesPath={routesPath}
							data={products}
						/>
						<div className={styles.page}>
							<Routes>
								{routesPath.map((routes) => {
									return (
										<Route
											key={routes.path}
											path={routes.path}
											element={
												routes.isAuth ? (
													<ProtectedRouteIsRole
														role={routes.roles}
													>
														{routes.element}
													</ProtectedRouteIsRole>
												) : (
													routes.element
												)
											}
										/>
									);
								})}
							</Routes>
						</div>
					</>
				)}
				<Footer />
				<Modal />
			</div>
		</div>
	);
};

export default withRouterAndProviderApp(FlowerShop);
