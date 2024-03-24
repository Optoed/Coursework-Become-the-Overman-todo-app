import React from 'react';
import { useState } from 'react';

import TodoItem from './item/TodoItem';
import CreateTodoField from './create-todo-field/CreateTodoField';

const data = [
	{
		_id: '1',
		title: 'Finish the essay collaboration',
		isCompleted: false,
	},
	{
		_id: '2',
		title: 'Read next chapter of the book',
		isCompleted: false,
	},
	{
		_id: '3',
		title: 'Finish the essay collaboration',
		isCompleted: false,
	},
	{
		_id: '4',
		title: 'Send the finished assignment',
		isCompleted: false,
	},
];

const Home = () => {
	const [todos, setTodos] = useState(data);

	const changeTodo = (id) => {
		const copy = [...todos];
		const current = copy.find((t) => t._id === id);
		if (current) {
			// Создаем копию найденной задачи с обновленным полем isCompleted
			const updatedTodo = {
				...current,
				isCompleted: !current.isCompleted,
			};
			// Находим индекс найденной задачи в массиве
			const index = copy.indexOf(current);
			// Заменяем найденную задачу на обновленную в копии массива
			copy[index] = updatedTodo;
			// Обновляем состояние todos новым массивом
			setTodos(copy);
		}
	};

	const removeTodo = (id) => {
		const copy = [...todos];
		const current = copy.filter((t) => t._id !== id);
		setTodos(current);
	};

	const addTodo = (title) => {
		const newTodo = {
			_id: Math.random(),
			title,
			isCompleted: false,
		};
		// setTodos([newTodo, ...todos]);
		setTodos([...todos, newTodo]);
	};

	// window.addTodo = addTodo //для теста, пишешь в консоли и указываешь текст задания addTodo('Пойти в gym')

	// РЕДАКТИРОВАНИЕ ЗАДАЧИ

	const editTodo = (id, newTitle) => {
		const updatedTodos = todos.map((todo) => {
			if (todo._id === id) {
				return {
					...todo,
					title: newTitle,
				};
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<div className=' text-white w-4/5 mx-auto max-w-full'>
			<h1 className='text-3xl font-bold text-center mb-8'>
				Become the Overman
			</h1>

			{todos.map((todo) => (
				<TodoItem
					key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
					editTodo={editTodo}
				/>
			))}

			{/* Поле для добавления новой задачи */}
			<CreateTodoField addTodo={addTodo} />
		</div>
	);
};

export default Home;
