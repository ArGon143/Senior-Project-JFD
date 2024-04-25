import styled from 'styled-components';
import { ControlPanel, Logo } from './components';

const Discription = styled.div`
	font-style: italic;
`;

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Discription>
			Веб-технологии
			<br />
			Написание кода
			<br />
			Разбор ошибок
		</Discription>
		<ControlPanel />
	</header>
);

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	min-width: 100%;
	max-width: 1350px;
	height: 120px;
	padding: 20px 40px;
	background-color: #d1d1d1;
	box-shadow: 0 -2px 17px #000;
	z-index: 10;
`;
