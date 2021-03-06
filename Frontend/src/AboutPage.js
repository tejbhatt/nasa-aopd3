import React, { Component } from 'react';
import './AboutPage.css';

class AboutPage extends Component {
	render() {
		return (
			<div>
				<h1 className='about-banner'>About This App</h1>
				<img
					className='about-page-logo'
					src={require('./project-images/nasa-old-school.jpg')}
					alt='Old-school NASA logo'></img>
				<p className='about-info'>
					
				</p>
				<p className='about-info'>
					The app itself runs using ReactJS, and utilizes NASA's Astronomy
					Picture of the Day API, an archive which contains data reaching back
					to June of 1995.
				</p>
				<div className='about-anchor-div'>
					<a
						className='about-anchor'
						target='_blank'
						rel='noopener noreferrer'
						href=''>
						LinkedIn
					</a>
					<a
						className='about-anchor'
						target='_blank'
						rel='noopener noreferrer'
						href=''>
						
					</a>
				</div>
			</div>
		);
	}
}

export default AboutPage;
