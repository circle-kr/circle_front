import React from 'react';
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../Header.css';
import useIsMd from '../hooks/useIsMd';
import menuIcon from '../images/menu_icon.svg';
import './GnbMobile';

function Header({ sidemenuToggle }){
    const { user, logout } = useContext(AuthContext);
    const GnbMobile = React.lazy(() => import('./GnbMobile'));
    const isMd = useIsMd();
    
    return(
        <header className='header'>
            <div className='header_wrap'>
                <div className='header_cont'>
                    <div className='pc_header'>
                        <button onClick={sidemenuToggle} className='hambuger_menu'><img src={menuIcon} alt="menu"/></button>
                        <Link to='/'><h1>Circle</h1></Link>
                        
                        { user ? (
                            <div className='sign_in_btn' onClick={logout}>
                                log out
                            </div>  
                        ) : (
                            <Link to="./SignIn">
                                <div className='sign_in_btn'>
                                    Sign in
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
                <div className='mobile_header'>
                   { isMd &&
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <GnbMobile />
                    </React.Suspense>
                    }
                </div>
            </div>
        </header>
    )
}
export default Header;