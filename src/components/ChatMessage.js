import React from 'react'
import '../ChatMessage.css'
import { useNavigate } from 'react-router-dom'
import arrowBackIcon from '../images/arrow_back_white.svg'
import arrowRightIcon from '../images/keyboard_arrow_right_icon.svg'
import photoIcon from '../images/photo_icon.svg'
import sendIcon from '../images/send_icon.svg'
function ChatMessage() {
   const navigate = useNavigate();
   function chatBackClick(){
        navigate(`/Chat`);
   }
   function profileInfoClick(){
    navigate('/ProfileInfo')
} 
    return(
        <main className='main sub_main'>
            <div className='chat_message_wrap'>
            <h2>Chat</h2>
                <div className='chat_message_cont'>
                    <div className='chat_message_top' onClick={profileInfoClick}>
                        <img src="" alt='' className='user_img'/>
                        <div className='chat_profile'>
                            <p className='user_name'>최유진 <img src={arrowRightIcon} alt="프로필 보기" /></p>
                            <p className='user_id'>eugene.yml</p>
                            <button onClick={chatBackClick} className='chat_back_btn'><img src={arrowBackIcon} alt="뒤로가기" className='arrow_back' /></button>
                        </div>
                    </div>
                    <div className='chat_message_middle'>
                        <p className='time_line'>2024년 11월 24일 일요일</p>
                        <div className='my_msg_box'>
                            <p>so exciting!</p>
                            <span>오전 2 : 13</span>
                        </div>
                    </div>
                    <div className='chat_message_bottom'>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}
export default ChatMessage;