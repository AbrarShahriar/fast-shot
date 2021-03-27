import React from 'react'
import './Footer.css'

import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';

const year = new Date().getFullYear()

function Footer() {
    return (
        <div className='footer'>

        <div className='footer-container'>

            <div className="footer-info">
                <div className="single-info">
                    <PhoneOutlinedIcon className='color-orange'/>
                    <span>(+880) 1887 764008</span>
                </div>
                <div className="single-info">
                    <EmailOutlinedIcon className='color-orange'/>
                    <span>AbrarShahriar321@gmail.com</span>
                </div>
                <div className="single-info">
                    <LocationOnSharpIcon className='color-orange'/>
                    <span>Maijdee, Noakhali</span>
                </div>
            </div>

            <div className="footer-branding">
                <div className="footer-logo">
                    <span className='footer-fast'>Fast</span><sup>TM</sup>
                    <p className='footer-shot'>Shot</p>
                </div>
                <div className="title footer-title">
                        <img src={process.env.PUBLIC_URL + 'images/text-bg.png'} alt='bg'/>
                        <h4>Since 2020</h4>
                    </div>
                <div className="social-icons">
                    <div className="social-icon">
                        <img src={process.env.PUBLIC_URL + 'images/icons/facebook.svg'} alt='fb'/>
                    </div>
                    <div className="social-icon">
                        <img src={process.env.PUBLIC_URL + 'images/icons/instagram.svg'} alt='insta'/>
                    </div>
                </div>
            </div>

            <div className="page-links">
                <ul className="links">
                    <li className="link no-border">Contact</li>
                    <li className="link no-border">About</li>
                    <li className="link no-border">Products</li>
                    <li className="link no-border">Sponsors</li>
                    <li className="link no-border">Reviews</li>
                    <li className="link no-border">Partners</li>
                </ul>
            </div>

        </div>

        <div className="copyright">
            <p className="licensed">@ {year} licensed under <b>FastShot. inc</b> copyright.</p>
            <span className="designed-by">
                Designed by <b><a href='www.github.com/AbrarShahriar'>Shahriar Adib</a></b>
            </span>
        </div>

        </div>
    )
}

export default Footer
