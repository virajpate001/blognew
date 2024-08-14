import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
	Link,
	Route,
	RouterProvider,
	createBrowserRouter
} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import SingleArticle from './components/SingleArticle.jsx'
import './assets/css/styles.css'
import Blog from './Pages/Blog.jsx'
import BrakeLink from './Pages/404.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: 'blog',
				element: <Blog />
			},
			{
				path: `/post/:id`,
				element: <SingleArticle />
			},
			{
				path: `*`,
				element: <BrakeLink />
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
