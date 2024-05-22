import { Error } from '../components';
import { ERROR } from '../constant';
import {
	AboutUs,
	Authorization,
	Main,
	PersonalCabinet,
	Product,
	Products,
	Registration,
	Reviews,
} from '../pages';
import { Cart } from '../pages/cart/Cart';

export const routesPath = [
	{
		path: '/',
		element: <Main />,
		label: 'Главная',
	},
	{
		path: '/products',
		element: <Products />,
		label: 'Каталог товаров',
	},
	{
		path: '/products/:id',
		element: <Product />,
	},
	{
		path: '/products/:id/edit',
		element: <Product />,
		label: 'Редактирование товара',
		isAuth: true,
		roles: ['ADMIN'],
	},
	{
		path: '/products/newproduct',
		element: <Product />,
		label: 'Добавление нового товара',
		isAuth: true,
		roles: ['ADMIN'],
	},
	{
		path: '/personal_cabinet',
		element: <PersonalCabinet />,
		label: 'Личный кабинет',
		isAuth: true,
		roles: ['ADMIN', 'MODERATOR', 'SHOPPER'],
	},
	{
		path: '/cart',
		element: <Cart />,
		label: 'Корзина',
		isAuth: true,
		roles: ['ADMIN', 'MODERATOR', 'SHOPPER'],
	},
	{
		path: '/about_us',
		element: <AboutUs />,
		label: 'О нас',
	},
	{
		path: '/reviews',
		element: <Reviews />,
		label: 'Отзывы',
	},
	{
		path: '/login',
		element: <Authorization />,
		label: 'Авторизация',
	},
	{
		path: '/register',
		element: <Registration />,
		label: 'Регистрация',
	},
	{
		path: '*',
		element: <Error error={ERROR.PAGE_NOT_EXIST} />,
		label: 'Ошибка',
	},
];
