// import logo from './logo.svg'
// import './App.css'

import React from 'react';

import Layout from './components/Layout';

import Home from './components/screens/Home/Home';
import LoginPage from './components/screens/header/header_pages/LoginPage';
import RegisterPage from './components/screens/header/header_pages/RegisterPage';
import Header from 'components/screens/header/Header';

import { Router, Route, Routes, Outlet } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			{/* <h1 className='text-3xl font-bold text-center mb-10 mt-10 text-white'>
				Become the Overman
			</h1> */}

			<Header />

			<Routes>
				{/* <Layout> */}
				{/* <Home /> */}
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				{/* <Route component={Home} /> */}
			</Routes>
			{/* </Layout> */}
		</div>
	);
}

export default App;
