import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/hero/Hero';
import NotFound from './components/about/Not';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='imgeo/'
						element={<Hero />}
					/>
					<Route
						path='*'
						element={<NotFound/>}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
