import { Route, Routes } from 'react-router-dom';
import { routesPath } from './routes';
import styles from './FlowerShop.module.css';
import withRouterAndProviderApp from './HOC/withRouterProviderApp';

const FlowerShop = () => {
	return (
		<div className={styles.appColumn}>
			<div>Header</div>
			<div className={styles.page}>
				<Routes>
					{routesPath.map((routes) => {
						return (
							<Route
								key={routes.path}
								path={routes.path}
								element={routes.element}
							/>
						);
					})}
				</Routes>
			</div>
			<div>Footer</div>
		</div>
	);
};

export default withRouterAndProviderApp(FlowerShop);
