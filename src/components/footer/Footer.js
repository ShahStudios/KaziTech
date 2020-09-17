import React from 'react';
import './Footer.css';
import { Button } from '../button/Button';
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
            <Link to='/home'>Web Development</Link>
            <Link to='/home'>Mobile Development</Link>
            <Link to='/home'>Cloud & Devops</Link>
            <Link to='/home'>UX / UI Design</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Company</h2>
            <Link to='/home'>About Us</Link>
            <Link to='/home'>Team</Link>
            <Link to='/home'>Offices</Link>
            <Link to='/home'>Careers</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/home'>Instagram</Link>
            <Link to='/home'>Facebook</Link>
            <Link to='/home'>Youtube</Link>
            <Link to='/home'>Twitter</Link>
          </div> 
          <div className='footer-link-items'>
            <h2>Resources</h2>
            <Link to='/home'>Blog</Link>
            <Link to='/home'>Downloads</Link>
            <Link to='/home'>Videos</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/home' className='social-logo'>
              <MdWhatshot className='navbar-icon' />
              KaziTech
            </Link>
          </div>
          <small className='website-rights'>Copyright © 2020 KaziTech</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/home'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/home'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '/home'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/home'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/home'
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
