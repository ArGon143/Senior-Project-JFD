export const transformRole = (userRole) => {
	let transformUserRole;

	if (userRole === 0) {
		transformUserRole = 'ADMIN';
	} else if (userRole === 1) {
		transformUserRole = 'MODERATOR';
	} else if (userRole === 2) {
		transformUserRole = 'SHOPPER';
	}

	return transformUserRole;
};

export const transformRoleRus = (userRole) => {
	let transformUserRole;

	if (userRole === 0) {
		transformUserRole = 'Администратор';
	} else if (userRole === 1) {
		transformUserRole = 'Модератор';
	} else if (userRole === 2) {
		transformUserRole = 'Покупатель';
	}

	return transformUserRole;
};
