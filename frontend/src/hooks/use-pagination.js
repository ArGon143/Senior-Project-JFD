import { useState } from 'react';

export const usePagination = (data, recordsPerPage) => {
	const [currentPage, setCurrentPage] = useState(1);

	const lastIndex = currentPage * recordsPerPage;
	const firstIndex = lastIndex - recordsPerPage;
	const records = data.slice(firstIndex, lastIndex);
	const numberPage = Math.ceil(data.length / recordsPerPage);
	const numbers = [...Array(numberPage + 1).keys()].slice(1);

	const prePage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const changeCPage = (id) => {
		setCurrentPage(id);
	};

	const nextPage = () => {
		if (currentPage !== numberPage) {
			setCurrentPage(currentPage + 1);
		}
	};

	return { nextPage, prePage, changeCPage, currentPage, records, numbers, numberPage };
};
