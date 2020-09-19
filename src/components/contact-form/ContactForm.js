import React from 'react';
import './ContactForm.css'
import { Button } from '../button/Button'

function ContactForm() {
    return (
        <div className='container'>
                    <h2 className='cf-h2'>Contact Us</h2>
                    <input type='text' class='field' placeholder='First Name'/>
                    <input type='text' class='field' placeholder='Last Name'/>
                    <input type='email' class='field' placeholder='Email'/>
                    <input type='text' class='field' placeholder='Phone Number'/>
                    <input type='text' class='field' placeholder='Company Name'/>
                    <textarea className='field area' placeholder='Message'></textarea>
                    <Button buttonSize='btn--wide' buttonColor='blue'>Submit</Button>
            </div>
    );
}

export default ContactForm;
