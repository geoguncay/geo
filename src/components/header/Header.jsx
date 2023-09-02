import React, { Component } from 'react';
import './header.css';

class Header extends Component {
	render() {
		return (
			<div className='about_title'>
				<h2 className='subtitle'>{this.props.subtitle}</h2>
				<h1 className='main_title'>{this.props.main_title}</h1>
			</div>
		);
	}
}

export default Header;
