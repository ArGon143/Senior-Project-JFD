import styles from './Error.module.css';

import { H2 } from '../h2/H2';
import { PROP_TYPE } from '../../constant';

export const Error = ({ error }) =>
	error && (
		<div className={styles.error}>
			<H2>Ошибка</H2>
			<div>{error}</div>
		</div>
	);

Error.propTypes = {
	error: PROP_TYPE.ERROR,
};
