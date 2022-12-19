import React from 'react'
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
                        <FacebookIcon/>
                    </a>
                    <a href="https://instagram.com">
                        <InstagramIcon/>
                    </a>
                    <a href="https://www.google.com/maps">
                        <LocationOnIcon/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer