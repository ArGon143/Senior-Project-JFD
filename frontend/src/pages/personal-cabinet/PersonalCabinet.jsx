import styles from './PersonalCabinet.module.css';
import { Tab } from '../../components';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../store/selectors';
import { ROLE } from '../../constant';
import { checkAccess } from '../../utils';
import { Account, Users } from './components';
import { PurchaseHistory } from './components/purchase-history/PurchaseHistory';

export const PersonalCabinet = () => {
	const tabs = [
		{
			id: 1,
			tabTitle: 'Учётная запись',
			content: <Account />,
		},
		{
			id: 2,
			tabTitle: 'История покупок',
			content: <PurchaseHistory />,
		},
	];

	const roleId = useSelector(selectUserRole);
	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	let setTabs;

	if (isAdmin) {
		setTabs = tabs.concat({
			id: 3,
			tabTitle: 'Пользователи',
			content: <Users />,
		});
	} else setTabs = tabs;

	return (
		<div className={styles.cabinet}>
			<Tab tabs={setTabs} />
		</div>
	);
};
