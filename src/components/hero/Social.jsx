import { BsLinkedin, BsGithub, BsInstagram, BsYoutube } from 'react-icons/bs';
import React, { Component } from 'react';

class Social extends Component {
	render() {
		return (
			<div className='social_icons'>
				<a
					className='social_icon'
					rel='noreferrer'
					href='https://www.linkedin.com/in/geoguncay/'
					target={'_blank'}
				>
					{' '}
					<BsLinkedin />{' '}
				</a>
				<a
					className='social_icon'
					rel='noreferrer'
					href='https://github.com/geoguncay/'
					target={'_blank'}
				>
					{' '}
					<BsGithub />
				</a>
				<a
					className='social_icon'
					rel='noreferrer'
					href='https://instagram.com/geogunky/'
					target={'_blank'}
				>
					{' '}
					<BsInstagram />
				</a>
				<a
					className='social_icon'
					rel='noreferrer'
					href='https://youtube.com'
					target={'_blank'}
				>
					{' '}
					<BsYoutube />
				</a>
			</div>
		);
	}
}

export default Social;
