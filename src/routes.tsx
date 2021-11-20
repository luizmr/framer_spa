import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { JSXElementConstructor, ReactElement } from 'react';
import ScrollToTop from 'components/scrollToTop';
import HomePage from 'pages/homePage';
import Todos from 'pages/todos';
import Albums from 'pages/albums';
import Posts from 'pages/posts';
import Photos from 'pages/photos';
import Comments from 'pages/comments';

const routeOptions = [
	{
		key: 'home',
		Component: <HomePage />,
		path: '/',
	},
	{
		key: 'todos',
		Component: <Todos />,
		path: '/todos',
	},
	{
		key: 'albums',
		Component: <Albums />,
		path: '/albums',
	},
	{
		key: 'photos',
		Component: <Photos />,
		path: '/albums/:id',
	},
	{
		key: 'posts',
		Component: <Posts />,
		path: '/posts',
	},
	{
		key: 'comments',
		Component: <Comments />,
		path: '/posts/:id',
	},
];

interface RouteInterface {
	key: string;
	path: string;
	Component: ReactElement<any, string | JSXElementConstructor<any>>;
}

export const AppRoutes = () => {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				{routeOptions.map((route: RouteInterface) => (
					<Route
						key={route.key}
						path={route.path}
						element={route.Component}
					/>
				))}
			</Routes>
		</Router>
	);
};
