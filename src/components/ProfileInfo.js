import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../ProfileInfo.css'
import arrowBackIcon from '../images/arrow_back_white.svg'
import languageIcon from '../images/language_icon.svg'
import locationIcon from '../images/location_icon.svg'
import schoolIcon from '../images/school_icon.svg'

function ProfileInfo() {
    const navigate = useNavigate();
    function profileBackClick(){
        navigate(`/Chat`)
    }
    return(
        <main className='main sub_main'>
            <div className='profile_info_wrap'>
                    <button onClick={profileBackClick}><img src={arrowBackIcon} alt="뒤로가기" className='arrow_back' /></button>
                <div className='profile_info_cont'>
                    <div className='profile_bg'>
                        
                    </div>
                    <div className='user_profile'>
                        <img src="" alt="" className='user_img' />
                        <p className='user_id'>hyun_wise</p>
                        <p>hello, world!</p>
                        <div className='user_info'>
                            <p><span><img src={languageIcon} alt="언어" /></span>English, Japanese, Chinese</p>
                            <p><span><img src={locationIcon} alt="거주지" /></span>United States</p>
                            <p><span><img src={schoolIcon} alt="학교" /></span>Seoul National University business administration</p>
                        </div>
                    </div>
                <div className='profile_btn_wrap'>
                    <button className='follow_btn'>Follow</button>
                    <button className='msg_btn'>Message</button>
                </div>
                </div>
            </div>
        </main>
    )
}
export default ProfileInfo;