import React from 'react';

import cn from 'classnames';

import { BsTrash } from 'react-icons/bs';

//на выбор
import { MdOutlineModeEdit } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';

import Check from './Check';

const TodoItem = ({ todo, changeTodo, removeTodo, editTodo }) => {
	return (
		<div className='flex justify-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
			{/* Change check */}
			<button onClick={() => changeTodo(todo._id)}>
				<Check isCompleted={todo.isCompleted} />
			</button>

			<span className={` ${todo.isCompleted ? 'line-through' : ''}`}>
				{todo.title}
			</span>

			{/* Edit */}
			<button className='ml-auto pl-4' onClick={() => editTodo(todo._id)}>
				<FaRegEdit
					size={24}
					className='text-gray-500 hover:text-emerald-500 transition-colors ease-in-out duration-300'
				/>
			</button>

			{/* Remove */}
			<button onClick={() => removeTodo(todo._id)} className='ml-4'>
				<BsTrash
					size={24}
					className='text-gray-500 hover:text-red-500 transition-colors ease-in-out duration-300'
				/>
			</button>
		</div>
	);
};

export default TodoItem;
