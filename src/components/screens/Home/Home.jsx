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
		current.isCompleted = !current.isCompleted;
		setTodos(copy);
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

	const editTodo = (id) => {
		const copy = [...todos];
		// console.log(id);
		const current = copy.filter((t) =>
			t._id === id ? (t.title = 'New title') : t
		);
		// console.log(current);
		setTodos(copy);
	};

	//console.log(todos)

	return (
		<div className=' text-white w-4/5 mx-auto'>
			<h1 className='text-3xl font-bold text-center mb-8'>
				Become the Overman
			</h1>

			{/* ДОБАВИТЬ ЗАДАЧУ */}
			{/* <button onClick={() => addTodo()} className='flex items-center justify-center mx-auto mb-4 p-2 border-2 rounded-lg border-pink-700 bg-pink-700 hover:border-pink-600 hover:bg-pink-600 transition-colors ease-in-out duration-300'>
				<span className=''>Add a new task</span>
			</button> */}

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
