import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './Pages/Not';
import Home from './Pages/Home';

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
