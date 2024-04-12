import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
	return (
		<div>
			<div className=' flex justify-center flex-col text-center w-1/3 mx-auto max-w-3xl min-w-72'>
				<div className='mb-4'>
					<p>USERNAME</p>
					<div className='mb-4 rounded-2xl border-pink-600 hover:border-pink-500 border-2 px-5 py-3 w-full max-w-full mt-3 ease-in-out duration-300'>
						<input
							type='text'
							// onChange={handleChange}
							// onFocus={handleInputFocus}
							// onBlur={handleInputBlur}
							// value={title}
							onKeyUp={(e) => e.key === 'Enter'}
							//className='text-zinc-800 px-4 py-2 rounded-lg border-2 border-white focus:outline-none focus:border-pink-400 transition-colors ease-in-out duration-300 w-1/2 max-w-full' //bg-transparent - для прозрачности
							className='bg-transparent w-full max-w-full border-none outline-none'
							placeholder='Think about your username'
						/>
					</div>
				</div>

				<div className='mb-4'>
					<p>PASSWORD</p>
					<div className='mb-4 rounded-2xl border-pink-600 hover:border-pink-500 border-2 px-5 py-3 w-full max-w-full mt-3 ease-in-out duration-300'>
						<input
							type='password'
							// onChange={handleChange}
							// onFocus={handleInputFocus}
							// onBlur={handleInputBlur}
							// value={title}
							onKeyUp={(e) => e.key === 'Enter'}
							//className='text-zinc-800 px-4 py-2 rounded-lg border-2 border-white focus:outline-none focus:border-pink-400 transition-colors ease-in-out duration-300 w-1/2 max-w-full' //bg-transparent - для прозрачности
							className='bg-transparent w-full max-w-full border-none outline-none'
							placeholder='Think about your password'
						/>
					</div>

					<div className=' mt-10'>
						<button
							// onClick={handleSignIn}
							className='border-2 rounded-lg border-pink-600 hover:border-pink-500 hover:bg-pink-500 px-10 py-1 text-center transition-colors ease-in-out duration-700'>
							<Link to='/login'>Register and Sign In</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
