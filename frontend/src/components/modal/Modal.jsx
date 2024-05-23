import styles from './Modal.module.css';

import { useSelector } from 'react-redux';
import {
	selectModalIsOpen,
	selectModalText,
	selectModalOnCancel,
	selectModalOnConfirm,
} from '../../store/selectors';
import { Button } from '../button/Button';

export const Modal = () => {
	const isOpen = useSelector(selectModalIsOpen);
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={styles.modal}>
			<div className={styles.overlay}></div>
			<div className={styles.box}>
				<div className={styles.text}>{text}</div>
				<div className={styles.buttons}>
					<Button
						width={'120px'}
						margin={'0 10px'}
						borderRadius={'5px'}
						children={'Ок'}
						onClick={onConfirm}
					/>
					<Button
						width={'120px'}
						margin={'0 10px'}
						borderRadius={'5px'}
						children={'Отмена'}
						onClick={onCancel}
					/>
				</div>
			</div>
		</div>
	);
};
