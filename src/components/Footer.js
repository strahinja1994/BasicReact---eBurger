import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from  '@mui/icons-material/LinkedIn'

const iconStyle = {
    color:"white", fontSize:"3rem"
}

export default function Footer() {
    return(
        <footer className='footer'>
            <h1 className='footer__title'>Reach us On Social Media</h1>
            <div className='footer__icons'>
                <a href="#"><FacebookIcon className="footer__icons-icon" style={iconStyle} /></a>
                <a href="#"><InstagramIcon className="footer__icons-icon" style={iconStyle}/></a>
                <a href="#"><TwitterIcon className="footer__icons-icon" style={iconStyle}/></a>
                <a href="#"><LinkedInIcon className="footer__icons-icon" style={iconStyle}/></a>
            </div>
        </footer>
    )
}