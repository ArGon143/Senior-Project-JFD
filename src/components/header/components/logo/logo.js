import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LargeText = styled.div`
	font-size: 48px;
	font-weight: 600;
	line-height: 48px;
`;
const SmallText = styled.div`
	font-size: 18px;
	font-weight: bold;
`;
const Span = styled.span`
	font-size: 48px;
	font-weight: 600;
	line-height: 48px;
	color: #7f5af0;
`;
const IMG = styled.img`
	height: 75px;
	margin-right: 5px;
`;

const LogoConteiner = ({ className }) => (
	<Link className={className} to="/">
		<IMG
			src="https://4.downloader.disk.yandex.ru/preview/4be2ae22148f4370e60d531526d2bfab037584b0cd76762380e5c948dbd43046/inf/d6Q5wtsQE_c4gEHiCnEhBKciXPcREz_yCKeZKeDMDjuaszLP4PpyRrq7-LWWUtBVCGiv0jEkXYjgrT-1PNg8gg%3D%3D?uid=537849441&filename=logo3%2070.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1901x933"
			alt="logo"
		/>
		<div>
			<LargeText>
				PET<Span>SHOP</Span>
			</LargeText>
			<SmallText>товары для животных</SmallText>
		</div>
	</Link>
);

export const Logo = styled(LogoConteiner)`
	display: flex;
	align-items: center;
`;
