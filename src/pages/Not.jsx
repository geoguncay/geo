import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<main className='not_found'>
			<p className='tex_404'>404</p>
			<h1 className='not_found_tittle'>Page not found</h1>
			<p>Sorry, we couldn’t find the page you’re looking for. </p>
			<div className='btn_back'>
				<div className='btn_404'>
					<Link to='geo/'>Back Home</Link>
				</div>
			</div>
		</main>
	);
}
