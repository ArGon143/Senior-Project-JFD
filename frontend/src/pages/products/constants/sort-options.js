import _ from 'lodash';

export const SORT_OPTIONS = [
	{
		value: 'titleASC',
		label: 'По алфавиту',
		sort: (data) => _.orderBy(data, ['title'], ['asc']),
	},
	{
		value: 'priceDESC',
		label: 'Цена по убыванию',
		sort: (data) => _.orderBy(data, ['price'], ['desc']),
	},
	{
		value: 'priceASC',
		label: 'Цена по возрастанию',
		sort: (data) =>
			data.slice().sort((itemA, itemB) => {
				return itemA.price - itemB.price;
			}),
	},
];
