import React, { Component } from 'react';
import Header from '../header/Header';
import './contact.css';
import { CiMail } from 'react-icons/ci';

class Contact extends Component {
	render() {
		return (
			<div id='contact'>
				<div className='contact_container'>
					<Header
						subtitle='Get in touch'
						main_title='Contact me'
					/>
					<div className='contact_section'>
						<p>Contact me to start your web development project.</p>
						<a
							className='button_contact'
							href='mailto:mymail@mail.co'
						>
							<CiMail />
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
