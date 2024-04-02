import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import reportWebVitals from './reportWebVitals';

import App from './App';

// import Home from './components/screens/Home/Home';

// import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
			{/* <Layout>
				<Home />
			</Layout> */}
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
