import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/Not';

const router = createHashRouter([
	{
		path: '/geo/',
		element: <Home />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
