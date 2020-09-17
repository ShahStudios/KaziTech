import React from 'react';
import { Button } from '../button/Button';
import './Pricing.css';
import { ImMobile } from 'react-icons/im';
import { FaLaptopCode } from 'react-icons/fa';
import { BsCardChecklist } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Service Plans</h1>
          <div className='pricing__container'>
            <Link to='/contact-us' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <ImMobile />
                </div>
                <h3>Mobile Development</h3>
                <h4>$399.99</h4>
                <p>starting at</p>
                <ul className='pricing__container-features'>
                  <li>Native iOS App Development</li>
                  <li>Cross-platform App Development</li>
                  <li>React Native App Development</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/contact-us' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaLaptopCode />
                </div>
                <h3>Web Development</h3>
                <h4>$699.99</h4>
                <p>starting at</p>
                <ul className='pricing__container-features'>
                  <li>Full-Stack Development</li>
                  <li>Custom CRM/ERP Software Apps</li>
                  <li>eCommerce Store Development</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            
            <Link to='/contact-us' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsCardChecklist />
                </div>
                <h3>Quality Assurance</h3>
                <h4>$499.99</h4>
                <p>starting at</p>
                <ul className='pricing__container-features'>
                  <li>API Testing Automation</li>
                  <li>Mobile Testing Automation</li>
                  <li>Web Testing Automation</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
