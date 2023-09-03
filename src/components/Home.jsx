import React, { Component } from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Skills from './skills/Skills'


class Home extends Component {
	render() {
		return (
			<>
				<Hero/>
				<About/>
				<Skills/>
			</>
		);
	}
}

export default Home;
