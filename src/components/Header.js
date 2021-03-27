import React from 'react'
import './Header.css'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Header() {

    const notPhone = useMediaQuery('(min-width: 1000px)')

    return (
        <header>
            <nav className='container'>
                <div className='logo'>
                    <a href='#'>
                        <span className='fast'>Fast</span>
                        Shot
                        <sup className='tm'>TM</sup>
                    </a>
                </div>

                {notPhone ? null : <MenuIcon className='nav-icon'/>}

                {notPhone && 
                <ul className="nav-links">
                    <li className="link"><a href="#">Home</a></li>
                    <li className="link"><a href="#">Menu</a></li>
                    <li className="link"><a href="#">About Us</a></li>
                    <li className="link"><a href="#">Contact</a></li>
                </ul>}

                {notPhone && 
                <div className="infos">
                    <div className="info">
                        <PhoneOutlinedIcon />
                        <span>(+880) 1887 764008</span>
                    </div>
                    <div className="info">
                        <EmailOutlinedIcon />
                        <span>AbrarShahriar321@gmail.com</span>
                    </div>
                </div>}

            </nav>
        </header>
    )
}

export default Header
