import React from 'react';
import chatBox from '../assets/images/chatbox-icon.png';
import './styles/Footer.css';

function Footer() {
    return (
        <div className='footer' >
            <hr id='footer-hr' />
            <div className='lists' >
                <div id='email'>
                    <p>I would like to receive communications about Aesop products, services, events and matters</p>
                    <p id='line-two' > of cultural interest. </p>
                    <input type="text" placeholder='Email address' />
                    <hr id='email-hr' />
                </div>

                <div id='links' >
                    <p>Contact us</p>
                    <ul className='contact-us' >
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        <li>Delivery and Returns</li>
                        <li>Track your order</li>
                        <li>Check Gift Card Balance</li>
                        <li>Terms and Conditions</li>
                        <li>Accesibility</li>
                    </ul>
                </div>
                <div>
                    <ul className='about' >
                        <p>About</p>
                        <li>Our story</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Corporate Gifts</li>
                        <li>Facial appointments</li>
                    </ul>
                </div>
                <div>
                    <ul className='social' >
                        <p>Social</p>
                        <a href="https://www.instagram.com/aesopskincare/"> <li>Instagram ↗</li> </a>
                        <a href="https://twitter.com/aesopskincare"> <li>Twitter ↗</li> </a>
                        <a href="https://www.linkedin.com/company/aesop"> <li>LinkedIn ↗</li> </a>
                    </ul>
                </div>
            </div>
            <a href=""><img id='chatbox' src={chatBox} alt="" /></a>
            <div id='geotag' >
                <p id='aesop' > &copy; Aesop </p>
                <a href=""> <p id='us' > United States </p> </a>
            </div>
        </div>
    );
}

export default Footer;