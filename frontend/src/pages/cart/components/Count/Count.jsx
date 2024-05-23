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
					src="https://i.postimg.cc/rsvjGqwq/icons8-up-24.png"
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
						src="https://i.postimg.cc/1zcd9V5w/icons8-down-96.png"
						alt={'down'}
						width={25}
						height={25}
						margin={'0'}
						padding={'0'}
					/>
				) : (
					<CustomImage
						src="https://i.postimg.cc/LX9bh4n7/icons8-down-245.png"
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
