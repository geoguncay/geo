import React, { Component } from 'react';
import data from '../../data/data.json';
import './hero.css';
import Social from './Social';
import me from '../../assets/me-about.jpg';

class Hero extends Component {
	render() {
		return (
			<>
				<div id='hero'>
					<div className='hero_header'>
						<h3 className='greeting'>{data.hero.greeting}</h3>
						<h1 className='hero_name'>{data.hero.name}</h1>
						<h2 className='hero_tittle'>{data.hero.title}</h2>
						<div className='social'>
							<Social></Social>
						</div>
					</div>
					<div className='hero_img'>
						<img
							src={data.hero.image}
							alt='geo'
						/>
					</div>
				</div>
			</>
		);
	}
}

export default Hero;
