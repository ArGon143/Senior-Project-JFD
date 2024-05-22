import styles from './Tab.module.css';
import PropTypes from 'prop-types';

import { useState } from 'react';

export const Tab = ({ tabs }) => {
	const [currentTab, setCurrentTab] = useState('1');

	const handleTabClick = (event) => {
		setCurrentTab(event.target.id);
	};

	return (
		<div className={styles.container}>
			<div className={styles.tabList}>
				{tabs.map((tab, i) => (
					<div
						className={
							currentTab === `${tab.id}`
								? `${styles.tabs} ${styles.activeTabs}`
								: styles.tabs
						}
						key={i}
						id={tab.id}
						onClick={handleTabClick}
					>
						{tab.tabTitle}
					</div>
				))}
			</div>
			<div className={styles.contentContainer}>
				{tabs.map((tab, i) => (
					<div key={i}>
						{currentTab === `${tab.id}` && (
							<div className={styles.content}>{tab.content}</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

Tab.propTypes = {
	tabs: PropTypes.array,
};
