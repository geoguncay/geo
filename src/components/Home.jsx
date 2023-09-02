import React, { Component } from 'react';
import Hero from './hero/Hero';
import About from './about/About';

class Home extends Component {
	render() {
		return (
			<>
				<Hero/>
				<About/>
			</>
		);
	}
}

export default Home;
