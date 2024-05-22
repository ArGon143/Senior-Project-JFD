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
					src="https://2.downloader.disk.yandex.ru/preview/c37686a863b95083841966dff7735ce10ed5c27884f6ca98b8ca9945b3419123/inf/nlIVE1pF-oN24pfThHrryIm9dVYYzkyn5P2Ara-3dfcYrxa0iCYhK2cz7_lfjna8mBo9GuPOEWrjt8h4ji1CQQ%3D%3D?uid=537849441&filename=icons8-save-100.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
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
				src="https://4.downloader.disk.yandex.ru/preview/d0b0d018f105d086aacab82b141f395862169860587211594b7dcf47f9559763/inf/S8LFtDL_BVVx-0LfPJ_eYq8vdc4f7yY1V24d7vwofjlmfB37Bg2sdADJ9x9OjT9gqn_pMn8xNm499gYgywMrcQ%3D%3D?uid=537849441&filename=icons8-trash-96.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
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
