import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginPage from './header_pages/LoginPage';
import RegisterPage from './header_pages/RegisterPage';

const Header = ({ isLoggedIn, onLogout }) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const handleLogout = () => {
		// Handle logout logic
		if (typeof onLogout === 'function') {
			onLogout();
		}
	};

	return (
		// <h1 className='text-3xl font-bold text-center mb-10 mt-10 text-white'>
		// 	Become the Overman
		// </h1>

		////////////////////////////////////////////////////////////////////////////////////////////

		<header className='bg-gray-800 text-white py-4 px-6 flex justify-between items-center'>
			<div className='logo text-2xl font-bold'>
				<Link to='/'>Your Logo</Link>
			</div>

			<nav>
				{isLoggedIn ? (
					<div className='relative'>
						<button
							onClick={() => setShowDropdown(!showDropdown)}
							className='flex items-center gap-2 bg-transparent border border-white px-3 py-1 rounded'>
							<i className='fas fa-user'></i>
							<span>Username</span>
							<i className='fas fa-caret-down'></i>
						</button>
						{showDropdown && (
							<div className='absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg'>
								<ul>
									<li className='hover:bg-gray-100 px-4 py-2 cursor-pointer'>
										Profile
									</li>
									<li
										onClick={handleLogout}
										className='hover:bg-gray-100 px-4 py-2 cursor-pointer'>
										Logout
									</li>
								</ul>
							</div>
						)}
					</div>
				) : (
					<div className='flex gap-4'>
						<Link
							to='/login'
							className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
							Login
						</Link>
						<Link
							to='/register'
							className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded'>
							Register
						</Link>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
