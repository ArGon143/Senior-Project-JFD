import styles from './Registration.module.css';

import { Link, Navigate } from 'react-router-dom';
import { AuthFormError, Button, CustomImage, H2, Input } from '../../components';
import { useResetForm } from '../../hooks';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../store/selectors';
import { setUser } from '../../store/actions';
import { ROLE } from '../../constant';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { request } from '../../utils';

const regFormShema = yup.object().shape({
	email: yup
		.string()
		.required('Заполните поле e-mail.')
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i, 'Некорректный email.'),
	login: yup
		.string()
		.required('Заполните поле "Логин".')
		.matches(
			/^[\wа-яА-ЯёЁ]+$/,
			'Неверно заполнено поле "Логин". Допускаются только буквы и цифры.',
		)
		.min(3, 'Неверно заполнено поле "Логин". Должно быть миимум 3 символа.')
		.max(15, 'Неверно заполнено поле "Логин". Должно быть максимум 15 символов.'),
	password: yup
		.string()
		.required('Заполните поле "Пароль".')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнено поле "Пароль". Допускаются только буквы, цифры и знаки # %.',
		)
		.min(6, 'Неверно заполнено поле "Пароль". Должно быть минимум 6 символов.')
		.max(30, 'Неверно заполнено поле "Пароль". Должно быть максимум 30 символов.'),
});

export const Registration = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			login: '',
			password: '',
		},
		resolver: yupResolver(regFormShema),
	});

	const [serverError, setServerError] = useState(null);
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);

	useResetForm(reset);

	const onSubmit = ({ email, login, password }) => {
		request('/register', 'POST', { email, login, password }).then(
			({ error, user }) => {
				if (error) {
					setServerError(`Ошибка запроса: ${error}`);
					return;
				}

				dispatch(setUser(user));
				sessionStorage.setItem('userData', JSON.stringify(user));
			},
		);
	};

	const formError =
		errors?.login?.message || errors?.password?.message || errors?.email?.message;

	const errorMessage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={styles.registration}>
			<div className={styles.registrationLeftWrapper}>
				<div className={styles.titleWrapper}>
					<H2
						fontSize={'32px'}
						fontWeight={'400'}
						margin={'33px 0 13px 0'}
						width={'50%'}
					>
						Регистрация
					</H2>
					<Link to="/" className={styles.linkUpdate}>
						<CustomImage
							src="https://1.downloader.disk.yandex.ru/preview/d352a2a46f03331be517312414b59d6ed122f7dc240d3de77df551a17127f7b6/inf/_RM0Z55Vv8BOADlIGymvOApu0wTbns9GMsu7u2LMMEgnce9oGj2T-wThqlFL7humiGS6A5F6CaRUEurIZbpwhg%3D%3D?uid=537849441&filename=icons8-home-64.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
							alt={'home'}
							width={21}
							height={21}
							padding={'0 5px 0 0'}
						/>
						На главную
					</Link>
				</div>
				{!errorMessage ? (
					<p className={styles.registrationText}>
						Зарегистрируйтесь и мы вам поможем
					</p>
				) : (
					<AuthFormError>{errorMessage}</AuthFormError>
				)}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						type="text"
						placeholder="E-mail..."
						height={'40px'}
						fontSize={'18px'}
						{...register('email', {
							onChange: () => setServerError(null),
						})}
					/>
					<Input
						type="text"
						placeholder="Логин..."
						height={'40px'}
						fontSize={'18px'}
						{...register('login', {
							onChange: () => setServerError(null),
						})}
					/>
					<Input
						type="password"
						placeholder="Пароль..."
						height={'40px'}
						fontSize={'18px'}
						margin={'0 0 40px 0'}
						{...register('password', {
							onChange: () => setServerError(null),
						})}
					/>
					<Button
						type="submit"
						disabled={!!formError}
						borderRadius={'5px'}
						width={'100%'}
						margin={'0 0 20px 0'}
						children={'Зарегистрироваться'}
					/>
				</form>
				<p className={styles.registrationText}>
					У вас уже есть учетная запись?{' '}
					<Link to="/login" className={styles.regLink}>
						Авторизация
					</Link>
				</p>
			</div>
			<div className={styles.registrationRightWrapper}>
				<CustomImage
					src="https://1.downloader.disk.yandex.ru/preview/3dc3e18faedd6c6c2e7c1f8bc4c7bf1161edf17e9b46c58600f46cd6ab82fe4e/inf/I9culZnG9PvPp0s92ghNYd1ecbX85TnPLSAkeG5jBFEGkyMTmTmqeK_OFlNXbA9d8OmOHle0cWIoGZqcdftaMg%3D%3D?uid=537849441&filename=Rectangle%2050.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896"
					alt={'flower'}
					width={350}
					height={430}
					padding={'0'}
					borderRadius={'0 10px 10px 0'}
				/>
			</div>
		</div>
	);
};
