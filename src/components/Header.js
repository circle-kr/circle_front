import React from 'react'
import { Link } from 'react-router-dom';
import "../Header.css"
import menuIcon from '../images/menu_icon.svg'
function Header({sidemenuToggle}) {
    return(
        <header className='header'>
            <div className='header_wrap'>
                <div className='header_cont'>
                    <button onClick={sidemenuToggle}><img src={menuIcon} alt="menu" /></button>
                    <Link to='/'><h1>Circle</h1></Link>
                    <Link to="./SignIn">
                        <div className='sign_in_btn'>
                            Sign in
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}
export default Header;