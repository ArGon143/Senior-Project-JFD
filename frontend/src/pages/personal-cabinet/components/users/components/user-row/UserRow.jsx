import PropTypes from 'prop-types';
import styles from './UserRow.module.css';
import { useState } from 'react';
import { request } from '../../../../../../utils';
import { TableRow } from '../table-row/TableRow';
import { PROP_TYPE } from '../../../../../../constant';
import { CustomImage } from '../../../../../../components';

export const UserRow = ({
	id,
	login,
	email,
	registeredAt,
	roleId: userRoleId,
	roles,
	onUserRemove,
}) => {
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};

	const onRoleSave = (userId, newUserRoleId) => {
		request(`/users/${userId}`, 'PATCH', { roleId: newUserRoleId }).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};

	const isSaveButtonDisabled = selectedRoleId === initialRoleId;

	return (
		<div className={styles.userRow}>
			<TableRow>
				<div className={styles.tableTitle}>{login}</div>
				<div className={styles.tableTitle}>{email}</div>
				<div className={styles.tableTitle}>{registeredAt}</div>
				<div className={styles.tableTitle}>
					<select value={selectedRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
				</div>
			</TableRow>
			{isSaveButtonDisabled ? (
				<div style={{ width: '32px' }}></div>
			) : (
				<CustomImage
					src="https://i.postimg.cc/CKYv6MH1/icons8-save-100.png"
					alt={'save'}
					width={32}
					height={32}
					margin={'0'}
					padding={'0'}
					cursor={'pointer'}
					onClick={() => onRoleSave(id, selectedRoleId)}
				/>
			)}
			<CustomImage
				src="https://i.postimg.cc/50Kn0BcY/icons8-trash-96.png"
				alt={'trash'}
				width={40}
				height={40}
				margin={'0 0 0 10px'}
				padding={'0'}
				cursor={'pointer'}
				onClick={onUserRemove}
			/>
		</div>
	);
};

UserRow.propTypes = {
	id: PropTypes.string.isRequired,
	login: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	registeredAt: PropTypes.string.isRequired,
	roleId: PROP_TYPE.ROLE_ID.isRequired,
	roles: PropTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
	onUserRemove: PropTypes.func.isRequired,
};
