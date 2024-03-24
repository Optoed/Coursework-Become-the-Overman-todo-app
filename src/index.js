import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
import Home from './components/screens/Home/Home'
import reportWebVitals from './reportWebVitals'

import Layout from './components/Layout'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<Layout>
			<Home />
		</Layout>
	</React.StrictMode>
)

reportWebVitals()
