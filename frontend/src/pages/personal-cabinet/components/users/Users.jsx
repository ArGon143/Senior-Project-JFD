import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL, openModal } from '../../../../store/actions';
import { selectUserRole } from '../../../../store/selectors';
import { request } from '../../../../utils';
import { ROLE } from '../../../../constant';
import { H2 } from '../../../../components';
import { TableRow, UserRow } from './components';
import styles from './Users.module.css';

export const Users = () => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
	const userRole = useSelector(selectUserRole);
	const dispatch = useDispatch();

	useEffect(() => {
		Promise.all([request('/users'), request('/users/roles')]).then(
			([usersRes, rolesRes]) => {
				setUsers(usersRes.data);
				setRoles(rolesRes.data);
			},
		);
	}, [shouldUpdateUserList, userRole]);

	const onUserRemove = (userId) => {
		dispatch(
			openModal({
				text: `Удалить пользователя?`,
				onConfirm: () => {
					request(`/users/${userId}`, 'DELETE').then(() => {
						setShouldUpdateUserList(!shouldUpdateUserList);
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={styles.users}>
			<H2 fontSize={'28px'} margin={'0 0 2rem 0'} children={'Пользователи'} />
			<div className={styles.usersWrapper}>
				<div>
					<TableRow>
						<div
							className={styles.tableTitle}
							style={{ fontWeight: 'bold', marginBottom: '1rem' }}
						>
							Логин
						</div>
						<div className={styles.tableTitle} style={{ fontWeight: 'bold' }}>
							E-mail
						</div>
						<div className={styles.tableTitle} style={{ fontWeight: 'bold' }}>
							Дата регистрации
						</div>
						<div className={styles.tableTitle} style={{ fontWeight: 'bold' }}>
							Роль
						</div>
					</TableRow>
					{users.map(({ id, login, email, registeredAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							email={email}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles.filter(
								({ id: roleId }) => roleId !== ROLE.GUEST,
							)}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
