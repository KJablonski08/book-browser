import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
	return (
		<div id='footer'>
			<div className='margin'>
				<h6> Let's connect: </h6>
				<ul className='connect'>
					<li>
						<a
							target='_blank'
							href='https://github.com/KJablonski08/book-browser'
							target='_blank'>
							<img
								className='connect-img'
								src='https://emoji.slack-edge.com/T0351JZQ0/github/019359e4f03230a2.png'
							/>
						</a>
					</li>
					<li>
						<a
							target='_blank'
							href='https://www.linkedin.com/in/katie-jablonski/'>
							<img
								src='https://emoji.slack-edge.com/T0351JZQ0/linkedin/d99de7ac281450d9.png'
								className='connect-img'
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
