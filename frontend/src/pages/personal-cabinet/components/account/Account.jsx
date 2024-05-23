import styles from './Account.module.css';

import { useSelector } from 'react-redux';
import { CustomImage, H2 } from '../../../../components';
import { selectUser } from '../../../../store/selectors';
import { transformRoleRus } from '../../../../utils';

export const Account = () => {
	const user = useSelector(selectUser);

	const userStatus = transformRoleRus(user.roleId);

	return (
		<div className={styles.account}>
			<CustomImage
				src={'https://i.postimg.cc/CLB6RQxF/icons8-male-user-100.png'}
				alt={'avatar'}
				width={150}
				height={150}
				margin={'2rem'}
				padding={'0'}
				borderRadius={'10px'}
			/>
			<div style={{ marginTop: '3rem' }}>
				<div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
					<H2
						color={'#888888'}
						width={'285px'}
						fontVariant={'normal'}
						fontWeight={'500'}
						fontSize={'23px'}
						margin={'0'}
						children={'Вы зашли как:'}
					/>
					<div style={{ fontSize: '23px', color: '#1f2937' }}>{user.login}</div>
				</div>
				<div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
					<H2
						color={'#888888'}
						width={'240px'}
						fontVariant={'normal'}
						fontWeight={'500'}
						fontSize={'23px'}
						margin={'0 3rem 0 0'}
						children={'Электронная почта:'}
					/>
					<div style={{ fontSize: '23px', color: '#1f2937' }}>{user.email}</div>
				</div>
				<div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
					<H2
						color={'#888888'}
						width={'240px'}
						fontVariant={'normal'}
						fontWeight={'500'}
						fontSize={'23px'}
						margin={'0 3rem 0 0'}
						children={'Ваш статус:'}
					/>
					<div style={{ fontSize: '23px', color: '#ff8f52' }}>{userStatus}</div>
				</div>
			</div>
		</div>
	);
};
