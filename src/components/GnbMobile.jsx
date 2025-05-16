import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import homeIcon from '../images/home_icon.png';
import joinCircleIcon from '../images/join_circle_icon.png';
import joinedCircleIcon from '../images/joined_circle_icon.png';
import moreIcon from '../images/more_gnb_icon.png';
import chatIcon from '../images/chat_gnb_icon.png';
import makeCircleIcon from '../images/make_circle_icon.png';
import notificationIcon from '../images/notification_gnb_icon.png';
import profileIcon from '../images/profile_icon.png';
function GnbMobile() {
    const [ isMoreMenu, setIsMoreMenu ] = useState(false);
    const moreMenuClick = () => {
        setIsMoreMenu(!isMoreMenu);
    }
    return(
        <div className='gnb_mobile'>
            <ul className='main_gnb'>
                <li><Link to="./"><img src={homeIcon} alt="home" />Home</Link></li>
                <li><Link to="./JoinCircle"><img src={joinCircleIcon} alt="joinCircle" />Join circle</Link></li>
                <li><Link to="./JoinedCircle01"><img src={joinedCircleIcon} alt="joinedCircle" />Joined circle</Link></li>
                <li><button onClick={moreMenuClick}><img src={moreIcon} alt="more" />More</button></li>
            </ul>

            <ul className={`sub_gnb ${isMoreMenu ? 'block' : 'none'}`}>
                <li className='more_gnb'><Link to="./Chat"><img src={chatIcon} alt="chat" />Chat</Link></li>
                <li className='more_gnb'><Link to="./MakeCircle"><img src={makeCircleIcon} alt="makeCircle" />Make circle</Link></li>
                <li className='more_gnb'><Link to="./Notification"><img src={notificationIcon} alt="notification" />Notification</Link></li>
                <li className='more_gnb'><Link to="./Profile"><img src={profileIcon} alt=" profile" />Profile</Link></li>
            </ul>
        </div>
    )
}
export default GnbMobile;