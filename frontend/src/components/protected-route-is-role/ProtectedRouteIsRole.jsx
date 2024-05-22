import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectUserIsAuth, selectUserRole } from '../../store/selectors';
import { transformRole } from '../../utils';
import PropTypes from 'prop-types';

export const ProtectedRouteIsRole = ({ children, role }) => {
	const userRole = useSelector(selectUserRole);
	const isAuth = useSelector(selectUserIsAuth);

	const userRoleName = transformRole(userRole);

	const hasUserRoles = () => role.some((requiredRole) => requiredRole === userRoleName);

	if (!isAuth) {
		return <Navigate to="/login" />;
	}

	if (!hasUserRoles()) {
		return <Navigate to="/" />;
	}
	return <div>{children}</div>;
};

ProtectedRouteIsRole.propTypes = {
	children: PropTypes.node.isRequired,
};
