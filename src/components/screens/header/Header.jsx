import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginPage from './header_pages/LoginPage';
import RegisterPage from './header_pages/RegisterPage';

const Header = ({ isLoggedIn, onLogout }) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const handleLogout = () => {
		if (typeof onLogout === 'function') {
			onLogout();
		}
	};

	return (
		<header className='text-white py-4 px-6 flex justify-between items-center'>
			<div className='logo text-2xl font-bold'>
				<Link to='/'>Become OverMan</Link>
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
							className='border-2 rounded-lg border-pink-600 hover:border-pink-500 hover:bg-pink-500 px-10 py-1 text-center transition-colors ease-in-out duration-700'>
							Login
						</Link>
						<Link
							to='/register'
							className='border-2 rounded-lg border-pink-600 hover:border-pink-500 hover:bg-pink-500 px-10 py-1 text-center transition-colors ease-in-out duration-700'>
							Register
						</Link>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
