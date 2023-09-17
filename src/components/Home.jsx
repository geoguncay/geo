import React, { Component } from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Skills from './skills/Skills';
import Contact from './contact/Contact';

class Home extends Component {
	render() {
		return (
			<>
				<Hero />
				<About />
				<Skills />
				<Contact />
			</>
		);
	}
}

export default Home;
