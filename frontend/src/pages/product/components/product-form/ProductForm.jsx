import styles from './ProductForm.module.css';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, H2, Input } from '../../../../components';
import { FormField } from './components';
import { sanitizeContent } from './utils';
import {
	CLOSE_MODAL,
	openModal,
	removeProductFetch,
	saveProductFetch,
} from '../../../../store/actions';

export const ProductForm = ({
	id,
	title,
	price,
	imageUrl,
	description,
	specifications,
	bestSel,
}) => {
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);
	const [priceValue, setPriceValue] = useState(price);
	const [specificationsValue, setSpecificationsValue] = useState(specifications);
	const [bestSelValue, setbestSelValue] = useState(bestSel);

	const descriptionRef = useRef(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSave = () => {
		const newDescription = sanitizeContent(descriptionRef.current.innerHTML);
		dispatch(
			saveProductFetch(id, {
				title: titleValue,
				price: priceValue,
				imageUrl: imageUrlValue,
				description: newDescription,
				specifications: specificationsValue,
				bestSel: bestSelValue,
			}),
		).then(() => navigate(`/products/${id}`));
	};

	const onImageChange = ({ target }) => setImageUrlValue(target.value);
	const onTitleChange = ({ target }) => setTitleValue(target.value);
	const onPriceChange = ({ target }) => setPriceValue(target.value);
	const onSpecificationValueChange = (e, index) => {
		const newSpecificationsValue = [...specificationsValue];
		newSpecificationsValue[index][e.target.name] = e.target.value;

		setSpecificationsValue(newSpecificationsValue);
	};

	const onProductRemove = (id) => {
		dispatch(
			openModal({
				text: `Удалить товар ${titleValue} ?`,
				onConfirm: () => {
					dispatch(removeProductFetch(id)).then(() => {
						navigate('/products');
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={styles.productsForm}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginBottom: '2rem',
				}}
			>
				<H2 children={'Данные товара'} fontSize={'28px'} margin={'0'} />
				<Button
					borderRadius={'5px'}
					width={'220px'}
					children={'Удалить товар'}
					onClick={() => onProductRemove(id)}
				/>
			</div>
			<FormField
				nameField={'Заголовок'}
				value={titleValue}
				onChange={onTitleChange}
			/>
			<FormField
				nameField={'Изображение'}
				value={imageUrlValue}
				onChange={onImageChange}
			/>
			<FormField nameField={'Цена'} value={priceValue} onChange={onPriceChange} />
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<H2
					children={'Описание'}
					width={'20%'}
					height={'40px'}
					fontWeight={'normal'}
					fontVariant={'normal'}
					fontSize={'18px'}
					margin={'auto 0'}
					padding={'0'}
				/>

				<div
					className={styles.productsContent}
					ref={descriptionRef}
					contentEditable={true}
					suppressContentEditableWarning={true}
				>
					{description}
				</div>
			</div>
			<div style={{ display: 'flex' }}>
				<div>
					{specifications.map((specification, i) => (
						<div
							key={i}
							style={{
								display: 'flex',
								width: '850px',
								gap: '2px',
							}}
						>
							<H2
								children={specification.name}
								width={'150px'}
								height={'40px'}
								fontWeight={'normal'}
								fontVariant={'normal'}
								fontSize={'18px'}
								margin={'auto 0'}
								padding={'0'}
							/>
							<Input
								width={'600px'}
								type="text"
								name="value"
								value={specification.value}
								onChange={(e) => onSpecificationValueChange(e, i)}
							/>
						</div>
					))}
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					marginTop: '2rem',
				}}
			>
				<Button
					disabled={!imageUrlValue || !titleValue || !priceValue}
					borderRadius={'5px'}
					width={'170px'}
					children={'Сохранить'}
					onClick={onSave}
				/>

				{bestSelValue === true ? (
					<Button
						borderRadius={'5px'}
						width={'170px'}
						children={'Из топа продаж'}
						onClick={() => setbestSelValue(false)}
					/>
				) : (
					<Button
						borderRadius={'5px'}
						width={'170px'}
						children={'В топ продаж'}
						onClick={() => setbestSelValue(true)}
					/>
				)}
				<Button
					borderRadius={'5px'}
					width={'170px'}
					children={'Отмена'}
					onClick={() => navigate(`/products`)}
				/>
			</div>
		</div>
	);
};

ProductForm.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		imageUrl: PropTypes.string,
		description: PropTypes.string,
		specifications: PropTypes.object,
		bestSel: PropTypes.bool,
	}),
};
