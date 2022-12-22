import React from 'react'
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fafacebook } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap'


function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-list-wrap'>
            <div className="footer-text">
                © 2023 by TopWash
            </div>
            </div>
            <div className="footer-list-wrap">
            <div className='social-links'>
                <a href="https://facebook.com">
                    <i className='fa-brands fa-facebook-f'></i>
                </a>
                <a href="https://instagram.com">
                    <i className='fa-brands fa-instagram'></i>
                </a>
                <a href="https://www.google.com/maps">
                <i className="fa-sharp fa-solid fa-location-dot"></i>
                </a>
            </div>
            </div>
        </div>
    )
}

export default Footer
