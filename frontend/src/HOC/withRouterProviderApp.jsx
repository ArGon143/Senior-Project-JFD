import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

const withRouterAndProviderApp = (Component) => (props) => {
	return (
		<HashRouter>
			<Provider store={store}>{<Component {...props} />}</Provider>
		</HashRouter>
	);
};

export default withRouterAndProviderApp;
