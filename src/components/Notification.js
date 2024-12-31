import React from 'react'
import '../Notification.css'
import moreIcon from '../images/more_icon.svg'
import arrowBack from '../images/arrow_back_icon.svg'
import { useState } from 'react';

function Notification() {
    const [follwVisible, setFollwVisible] = useState(false);

    function moreClickBtn(){
        setFollwVisible(!follwVisible);
    }

    return(
    <main className='main sub_main'>
        <div className='notification_wrap'>
            <h2>Notification</h2>
            <div className='notification_cont'>
                <div className={`follow_cont ${follwVisible ? 'show' : 'hide'}`}>
                    <div>
                        <button onClick={moreClickBtn} className='back_btn'><img src={arrowBack} alt="돌아가기" /></button> 
                        <h3>팔로우 요청</h3>
                    </div>
                    <div className='follow_box1'>
                       <p></p>
                       <div className='follow_btn_wrap'>
                           <button className='accept_btn'>Accept</button>
                           <button className='reject_btn'>Reject</button>
                       </div> 
                    </div>
                    <div className='follow_box1'>
                       <p></p>
                       <div className='follow_btn_wrap'>
                           <button className='accept_btn'>Accept</button>
                           <button className='reject_btn'>Reject</button>
                       </div> 
                    </div>
                    <div className='follow_box1'>
                       <p></p>
                       <div className='follow_btn_wrap'>
                           <button className='accept_btn'>Accept</button>
                           <button className='reject_btn'>Reject</button>
                       </div> 
                    </div>
                </div>

                <div className={`notification_cont_wrap dsp_none ${follwVisible ? 'none' : 'block'}`}>
                    <div className= 'notification_box1'>
                        <span><img src="" alt="" /></span>
                        <p></p>
                        <button onClick={moreClickBtn} className='more_btn'><img src={moreIcon} alt="더보기" /></button>
                    </div>

                    <div className= 'notification_box1'>
                        <span><img src="" alt="" /></span>
                        <p></p>
                    </div>

                    <div className= 'notification_box1'>
                        <span><img src="" alt="" /></span>
                        <p></p>
                    </div>

                    <div className= 'notification_box1'>
                        <span><img src="" alt="" /></span>
                        <p></p>
                    </div>
                    
                </div>
            </div>
        </div>
    </main>
    )
}
export default Notification;