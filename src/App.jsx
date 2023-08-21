import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/Not';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='geo/'
					element={<Home />}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
