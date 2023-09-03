import React, { Component } from 'react';
import Header from '../header/Header';
import './skills.css';
import { BsFiletypeSql } from 'react-icons/bs';
import { ImHtmlFive, ImCss3 } from 'react-icons/im';
import {
	SiJavascript,
	SiPython,
	SiReact,
	SiGit,
	SiDjango,
} from 'react-icons/si';

class Skills extends Component {
	render() {
		return (
			<div id='skills'>
				<div className='skills_container'>
					<Header
						subtitle='Experience'
						main_title='Skills'
					/>
					<div className='skills_section'>
						<h1>Technologies</h1>
						<div className='technologies'>
							<div className='icons'>
								<ImHtmlFive className='icon' />
								<ImCss3 className='icon' />
								<SiJavascript className='icon' />
								<SiGit className='icon' />
								<BsFiletypeSql className='icon' />
								<SiReact className='icon' />
								<SiPython className='icon' />
								<SiDjango className='icon' />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
