import React, { Component } from 'react';
import Header from '../header/Header';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import './about.css';
import me from './../../assets/me.png';

class About extends Component {
	render() {
		return (
			<div id='about'>
				<div className='about_container'>
					<Header
						subtitle='Get to Know'
						main_title='About me'
					/>
					<div className='about_section'>
						<div className='about_picture'>
							<img
								src={me}
								alt=''
							/>
						</div>
						<div className='about_content'>
							<p>
								My name is Geovanny, I am currently expanding my professional
								horizons, I seek to improve and test my skills and knowledge. I
								enjoy situations where I have to test myself and learn new
								things, I consider that the ability to overcome is one of the
								very important qualities for a candidate, that is why i prepare
								me a every day to learn and improve my skills..
							</p>
							<div className='phrase'>
								<p>
									<span>
										<RiDoubleQuotesL />
										Learning is an experience.
									</span>
									<span>
										Everything else is just information.
										<RiDoubleQuotesR />
									</span>
								</p>
								<div className='phrase_autor'>
									<span>― </span>Albert Einstein
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
