import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<>
			<main className='grid min-h-full h-screen place-items-center bg-dark px-6 py-24 sm:py-32 lg:px-8'>
				<div className='text-center'>
					<p className='sm:text-[10rem] text-[15rem] font-semibold text-black-light'>
						404
					</p>
					<h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl uppercase'>
						Page not found
					</h1>
					<p className='mt-6 text-base leading-7 text-gray-300'>
						Sorry, we couldn’t find the page you’re looking for.
					</p>
					<div className='mt-10 flex items-center justify-center gap-x-6'>
						<a className='rounded-md bg-blue px-3.5 py-2.5 bg-blue-500 text-sm font-semibold text-white shadow-sm hover:bg-blue-300 hover:text-black'>
							<Link to='imgeo/'>Back Home</Link>
						</a>
					</div>
				</div>
			</main>
		</>
	);
}
