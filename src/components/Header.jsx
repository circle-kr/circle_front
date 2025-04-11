import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import "../Header.css"
import menuIcon from '../images/menu_icon.svg'
function Header({ sidemenuToggle }){
    const { user, logout } = useContext(AuthContext);
    return(
        <header className='header'>
            <div className='header_wrap'>
                <div className='header_cont'>
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
        </header>
    )
}
export default Header;