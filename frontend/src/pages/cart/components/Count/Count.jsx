import { useDispatch } from 'react-redux';
import { CustomImage, Input } from '../../../../components';
import styles from './Count.module.css';
import { addCount, subCount } from '../../../../store/actions';
import PropTypes from 'prop-types';

export const Count = ({ count, id }) => {
	const dispatch = useDispatch();

	const increase = (id) => {
		dispatch(addCount(id));
	};

	const decrease = (id) => {
		dispatch(subCount(id));
	};

	return (
		<div className={styles.count}>
			<div className={styles.countBox}>
				<Input
					value={count}
					readOnly
					margin={'0'}
					background={'none'}
					border={'1px solid rgba(0, 0, 0, 0.2)'}
					padding={'5px 0 5px 10px'}
					outline={'none'}
					cursor={'default'}
				/>
			</div>
			<div className={styles.countControls}>
				<CustomImage
					src="https://2.downloader.disk.yandex.ru/preview/53c47d2cd02ef4a6b62ed8264214c427f1b378f9262e822de0ab1b60fe5d4bc6/inf/TBRVnKJt-XE6sK59zHzeeaY3e6aVTD5uxFmHksNlr1aP0B42KODwGmk_T2qbI5oFLo-JiExPJejMV7ss5gxNgA%3D%3D?uid=537849441&filename=icons8-up-24.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
					alt={'up'}
					width={25}
					height={25}
					margin={'0'}
					padding={'0'}
					cursor={'pointer'}
					onClick={() => {
						increase(id);
					}}
				/>
				{count === 1 ? (
					<CustomImage
						src="https://3.downloader.disk.yandex.ru/preview/2e13be047c4c9b4f847b160c31a21b16c427587dd54ead1f511ec182b2d1c477/inf/wf3ib0j9amprkiPw0wEnANBixfQNWIt2qrV0Elwl2d81ExFNmovON9hbEdwnAJ4G3_JaSFmGgHPbKcl09FgADQ%3D%3D?uid=537849441&filename=icons8-down-96.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
						alt={'down'}
						width={25}
						height={25}
						margin={'0'}
						padding={'0'}
					/>
				) : (
					<CustomImage
						src="https://3.downloader.disk.yandex.ru/preview/0ff9a0d9b314158fd2252971fa6384d8a358e073dcb2789a73305f495b8fbecf/inf/5pWJcc5DjdDPKaWjhAhwQpB-AQ0pVOuzjHOvSIKEPKHv0e4b4cpAymzAoXbi8CnIT7TiNFDXaExbQeoa5a9fCQ%3D%3D?uid=537849441&filename=icons8-down-245.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
						alt={'down'}
						width={25}
						height={25}
						margin={'0'}
						padding={'0'}
						cursor={'pointer'}
						onClick={() => {
							decrease(id);
						}}
					/>
				)}
			</div>
		</div>
	);
};

Count.propTypes = {
	id: PropTypes.string,
	count: PropTypes.number,
};
