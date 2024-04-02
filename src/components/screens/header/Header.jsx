import React, { useState } from 'react';

import LoginPage from './header_pages/LoginPage';
import RegisterPage from './header_pages/RegisterPage';

const Header = ({ isLoggedIn, onLogin, onRegister, onLogout }) => {
	const [showLoginPage, setShowLoginPage] = useState(false);
	const [showRegisterPage, setShowRegisterPage] = useState(false);

	const handleLoginClick = () => {
		setShowLoginPage(true);
	};

	const handleRegisterClick = () => {
		setShowRegisterPage(true);
	};

	return (
		<h1 className='text-3xl font-bold text-center mb-10 mt-10 text-white'>
			Become the Overman
		</h1>

		// <header className='flex justify-between items-center mt-10 mb-20 text-white b'>
		// 	<div className='logo text-4xl font-bold'>
		// 		<a href='https://vk.com/alessandro_djirandolle'>
		// 			Become the Overman
		// 		</a>
		// 	</div>

		// 	<div className='buttons flex gap-4'>
		// 		{!isLoggedIn ? (
		// 			<>
		// 				<button
		// 					className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
		// 					// onClick={onLogin}>
		// 					onClick={handleLoginClick}>
		// 					Войти
		// 				</button>

		// 				<button
		// 					className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded'
		// 					// onClick={onRegister}>
		// 					onClick={handleRegisterClick}>
		// 					Зарегистрироваться
		// 				</button>
		// 			</>
		// 		) : (
		// 			<>
		// 				<div className='relative'>
		// 					<button
		// 						className='bg-transparent border border-white text-white px-4 py-2 rounded'
		// 						onClick={onLogout}>
		// 						<i className='fas fa-user mr-2'></i> Профиль
		// 					</button>
		// 					{/* Dropdown menu for user profile */}
		// 					<div className='absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg hidden'>
		// 						<ul>
		// 							<li className='hover:bg-gray-100 px-4 py-2 cursor-pointer'>
		// 								Настройки
		// 							</li>
		// 							<li className='hover:bg-gray-100 px-4 py-2 cursor-pointer'>
		// 								Выход
		// 							</li>
		// 						</ul>
		// 					</div>
		// 				</div>
		// 			</>
		// 		)}
		// 	</div>
		// 	{showLoginPage && (
		// 		<LoginPage onClose={() => setShowLoginPage(false)} />
		// 	)}
		// 	{showRegisterPage && (
		// 		<RegisterPage onClose={() => setShowRegisterPage(false)} />
		// 	)}
		// </header>
	);
};

export default Header;
