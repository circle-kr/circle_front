import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import "../Header.css"
import menuIcon from '../images/menu_icon.svg'
import closeIcon from '../images/close_icon.svg';

function Header({ sidemenuToggle }){
    const { user, logout } = useContext(AuthContext);
    const [ isMobileMenu, setIsMobileMenu ] = useState(false);

    const mobileMenuToggle = () => {
        setIsMobileMenu(!isMobileMenu);
    }
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
                        <button className='hambuger_menu_mobile' onClick={mobileMenuToggle}><img src={isMobileMenu ? closeIcon : menuIcon } alt="menu"/></button>
                        <Link to='/' className='mobile_home'><h1>Circle</h1></Link>
                        <div className={`mobile_gnb ${isMobileMenu ? 'block' : 'none'}`} >
                        <ul>
                            <li><Link to='./JoinCircle'>· Join circle</Link></li>
                            <li><Link to='./MakeCircle'>· Make circle</Link></li>
                            <li><Link to='./JoinedCircle01'>· Joined circle</Link></li>
                            <li><Link to='./Notification'>· Notification</Link></li>
                            <li><Link to='./Chat'></Link>· Chat</li>
                            <li><Link to='./Profile'></Link>· Profile</li>
                        </ul>
                        <div className='sign_wrap'>
                            <Link to='./Signin' className='sign_in'>Sign in</Link>
                            <Link to='./Signup'>Sign up</Link>
                        </div>
                        </div>
                        
                       
                    </div>
            </div>
        </header>
    )
}
export default Header;