import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

const withRouterAndProviderApp = (Component) => (props) => {
	return (
		<BrowserRouter>
			<Provider store={store}>{<Component {...props} />}</Provider>
		</BrowserRouter>
	);
};

export default withRouterAndProviderApp;
