import React from 'react';
import './Footer.css';
import { Button } from '../../button/Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdWhatshot } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Get updates of our software solutions and stay in tune for future developements
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Services</h2>
            <Link to='/sign-up'>Web Development</Link>
            <Link to='/'>Mobile Development</Link>
            <Link to='/'>Cloud & Devops</Link>
            <Link to='/'>UX / UI Design</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Company</h2>
            <Link to='/'>About Us</Link>
            <Link to='/'>Team</Link>
            <Link to='/'>Offices</Link>
            <Link to='/'>Careers</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div> 
          <div className='footer-link-items'>
            <h2>Resources</h2>
            <Link to='/'>Blog</Link>
            <Link to='/'>Downloads</Link>
            <Link to='/'>Videos</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdWhatshot className='navbar-icon' />
              KaziTech
            </Link>
          </div>
          <small className='website-rights'>Copyright © 2020 KaziTech</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                ''
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
