import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import { redirect } from 'react-router-dom';

import TodoItem from './item/TodoItem';
import CreateTodoField from './create-todo-field/CreateTodoField';
//import Header from '../../screens/header/Header';

// const data = [
// 	{
// 		_id: '1',
// 		title: 'Finish the essay collaboration',
// 		isCompleted: false,
// 	},
// 	{
// 		_id: '2',
// 		title: 'Read next chapter of the book',
// 		isCompleted: false,
// 	},
// 	{
// 		_id: '3',
// 		title: 'Finish the essay collaboration',
// 		isCompleted: false,
// 	},
// 	{
// 		_id: '4',
// 		title: 'Send the finished assignment',
// 		isCompleted: false,
// 	},
// ];

const Home = () => {
	//const [todos, setTodos] = useState(data);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetchTasks();
	}, []);

	const fetchTasks = async () => {
		try {
			const response = await axios.get(
				'http://localhost:8080/api/v1/tasks'
			);
			setTodos(response.data);
		} catch (error) {
			console.error('Error fetching tasks: ', error);
		}
	};

	//Поменять статус "Выполнено / Не выполнено" на противоположный
	const changeTodo = async (id) => {
		try {
			const currentTask = todos.find((task) => task.id === id);
			if (!currentTask) {
				console.error('Task not found!');
				return;
			}

			const updatedStatus = !currentTask.isCompleted;

			await axios.put('http://localhost:8080/api/v1/tasks/${id}', {
				isCompleted: updatedStatus,
			});
			fetchTasks();
		} catch (error) {
			console.error('Error changing task:', error);
		}
	};

	const removeTodo = async (id) => {
		try {
			await axios.delete('http://localhost:8080/api/v1/tasks/${id}');
			fetchTasks();
		} catch (error) {
			console.error('Error removing task:', error);
		}
	};

	const addTodo = async (title) => {
		try {
			await axios.post('http://localhost:8080/api/v1/tasks', {
				title,
				isCompleted: false,
			});
			fetchTasks();
		} catch (error) {
			console.error('Error adding task:', error);
		}
	};

	// Редактировать содержимое (название, подзадачи и тд) задачи
	const editTodo = (id, newTitle) => {
		try {
			axios.put('http://localhost:8080/api/v1/tasks/${id}', {
				title: newTitle,
			});
			fetchTasks();
		} catch (error) {
			console.error('Error editing task:', error);
		}
	};

	// Делим на группы по типу: "не выполненные / выполненные"
	//const incompleteTodos = todos.filter((todo) => !todo.isCompleted);
	//const completedTodos = todos.filter((todo) => todo.isCompleted);

	return (
		<div className=''>
			{/* Столбцы с задачами по типу: "не выполненные / выполненные" */}
			<div className='flex justify-between flex-container'>
				{/* column - смотри в css, это для адаптивной верстки */}
				<div className='w-1/2 max-w-1/2 mb-4 column mr-4'>
					<h2 className='text-xl font-bold flex items-center justify-center mb-2'>
						Uncompleted Tasks
					</h2>
					{todos
						.filter((todo) => !todo.isCompleted)
						.map((todo) => (
							<TodoItem
								key={todo._id}
								todo={todo}
								changeTodo={changeTodo}
								removeTodo={removeTodo}
								editTodo={editTodo}
							/>
						))}
				</div>

				<div className='w-1/2 max-w-1/2 mb-4 column ml-4'>
					<h2 className='text-xl font-bold flex items-center justify-center mb-2'>
						Completed Tasks
					</h2>
					{todos
						.filter((todo) => todo.isCompleted)
						.map((todo) => (
							<TodoItem
								key={todo._id}
								todo={todo}
								changeTodo={changeTodo}
								removeTodo={removeTodo}
								editTodo={editTodo}
							/>
						))}
				</div>
			</div>

			{/* Поле для добавления новой задачи */}
			<CreateTodoField addTodo={addTodo} />
		</div>
	);
};

export default Home;
