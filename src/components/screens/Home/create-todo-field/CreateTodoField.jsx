import React from 'react';
import { useState } from 'react';

const CreateTodoField = ({ addTodo }) => {
	const [title, setTitle] = useState('');

	//console.log(title)

	const handleChange = (e) => {
		setTitle(e.target.value);
		// Вычисляем ширину содержимого в input
		//const contentWidth = e.target.style.width;
		// Устанавливаем ширину input так, чтобы она была на 10px больше ширины содержимого
		//e.target.style.width = contentWidth + 100 + 'px';
	};

	const handleInputBlur = (e) => {
		// Сбросим ширину input при потере фокуса
		if (e.target.value.length === 0) {
			e.target.style.width = '';
		}
	};

	const handleAddTodo = () => {
		if (title.trim() !== '') {
			//trim() убирает пробелы слева и справа
			addTodo(title);
			setTitle(''); // Очистить поле ввода после добавления задачи
		}
	};

	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20'>
			<input
				type='text'
				onChange={handleChange}
				// onFocus={handleInputFocus}
				// onBlur={handleInputBlur}
				value={title}
				onKeyUp={(e) => e.key === 'Enter' && handleAddTodo()}
				//className='text-zinc-800 px-4 py-2 rounded-lg border-2 border-white focus:outline-none focus:border-pink-400 transition-colors ease-in-out duration-300 w-1/2 max-w-full' //bg-transparent - для прозрачности
				className='bg-transparent w-full border-none outline-none'
				placeholder="What's next, Hero?"
			/>
		</div>
	);
};

export default CreateTodoField;
