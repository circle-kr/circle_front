import React from 'react'
import '../Chat.css'
import { useNavigate } from 'react-router-dom';

function Chat() {
    const navigate = useNavigate();
    function profileInfoClick(){
        navigate('/ProfileInfo')
    }
    function ChatMessageClick(){
        navigate('/ChatMessage')
    }
    return(
    <main className='main sub_main'>
        <div className='chat_wrap'>
            <h2>Chat</h2>
            <div className='chat_cont'>
                <div className='chat_box'>
                    <img src="" alt='user_img' className='user_img' onClick={profileInfoClick}/>
                    <div className='chat_txt' onClick={ChatMessageClick}>
                        <p className='chat_id'>hyun_wise</p>
                        <p className='chat_msg'>hello, baby<span className='chat_time'>3시간 전</span></p>
                        <div className='msg_mark'></div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}
export default Chat;