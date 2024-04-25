import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthFormError, Button, H2, Input } from '../../components';
import { useResetForm } from '../../hooks';
import { server } from '../../bff';
import { ROLE } from '../../constans';
import { selectUserRole } from '../../selectors';
import { setUser } from '../../actions';

const regFormShema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните поле логин.')
		.matches(
			/^\w+$/,
			'Неверно заполнено поле логин. Допускаются только буквы и цифры.',
		)
		.min(3, 'Неверно заполнено поле логин. Должно быть миимум 3 символа.')
		.max(15, 'Неверно заполнено поле логин. Должно быть максимум 15 символов.'),
	password: yup
		.string()
		.required('Заполните поле пароль.')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнено поле пароль. Допускаются только буквы, цифры и знаки # %.',
		)
		.min(6, 'Неверно заполнено поле пароль. Должно быть миимум 6 символов.')
		.max(30, 'Неверно заполнено поле пароль. Должно быть максимум 30 символов.'),
	passcheck: yup
		.string()
		.required('Заполните поле повтора пароля.')
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

const RegistrationContainer = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(regFormShema),
	});

	const [serverError, setServerError] = useState(null);

	const dispatch = useDispatch();

	const roleId = useSelector(selectUserRole);

	useResetForm(reset);

	const onSubmit = ({ login, password }) => {
		server.register(login, password).then(({ error, response }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispatch(setUser(response));
			sessionStorage.setItem('userData', JSON.stringify(response));
		});
	};

	const formError =
		errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;

	const errorMessage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={className}>
			<H2>Регистрация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Логин..."
					{...register('login', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Пароль..."
					{...register('password', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Повторите пароль..."
					{...register('passcheck', {
						onChange: () => setServerError(null),
					})}
				/>
				<Button type="submit" disabled={!!formError}>
					Зарегистрироваться
				</Button>
				{errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
			</form>
		</div>
	);
};

export const Registration = styled(RegistrationContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;

	& > form {
		display: flex;
		flex-direction: column;
		width: 260px;
	}
`;
