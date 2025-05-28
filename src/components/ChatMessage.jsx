import React, { useState, useEffect, useRef } from "react";
import "../ChatMessage.css";
import { useNavigate } from "react-router-dom";
import arrowBackIcon from "../images/arrow_back_white.svg";
import arrowRightIcon from "../images/keyboard_arrow_right_icon.svg";
import photoIcon from "../images/photo_icon.svg";
import sendIcon from "../images/send_icon.svg";

function ChatMessage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); 
  const [input, setInput] = useState('');
  const socketRef = useRef(null);

   useEffect(() => {
    const socket = new WebSocket('ws://localhost:8081');

    socket.onopen = () => console.log('연결됨');
    socket.onmessage = e => {
      console.log('메시지:', e.data);
      setMessages(prev => [...prev, e.data]); // 메시지 상태에 추가
    };

    socketRef.current = socket;

    return () => {
      console.log('소켓 닫는 중...');
      socket.close();
    };
  }, []);

  const submitHandler = e => {
    e.preventDefault();
       if (
      socketRef.current && 
      socketRef.current.readyState === WebSocket.OPEN &&
      message.trim() !== ""
    ) {
      socketRef.current.send(message);
      setMessage("");
    } else {
      console.log('소켓 연결이 아직 열리지 않았거나 메시지가 비어있습니다.');
    }
  };

  const chatBackClick = () => {
    navigate(`/Chat`);
  };

  const profileInfoClick = () => {
    navigate("/ProfileInfo");
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <main className="main sub_main">
      <div className="chat_message_wrap">
        <form onSubmit={submitHandler}>
          <h2>
            <button onClick={chatBackClick} className="chat_back_btn">
              <img src={arrowBackIcon} alt="뒤로가기" className="arrow_back" />
            </button>
          </h2>
          <div className="chat_message_cont">
            <div className="chat_message_top" onClick={profileInfoClick}>
              <img src="" alt="" className="user_img" />
              <div className="chat_profile">
                <p className="user_name">
                  최유진 <img src={arrowRightIcon} alt="프로필 보기" />
                </p>
                <p className="user_id">hyun_wise</p>
              </div>
            </div>
            <div className="chat_message_middle">
              <p className="time_line">2024년 11월 24일 일요일</p>
    
              {messages.map((msg, index) => (
                <div key={index} className="msg_container">
                  <div className="my_msg_box">
                    <p>{msg}</p>
                    <span>{new Date().toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="chat_message_bottom">
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
              />
              <div className="photo_btn" onClick={handleClick}>
                <img src={photoIcon} alt="사진첨부" />
              </div>
              <input
                type="text"
                value={message}
                className="msg_input"
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="chat_msg_btn send_btn" type="submit">
                <img src={sendIcon} alt="보내기" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default ChatMessage;
