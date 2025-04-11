import React, { useState } from "react";
import "../ChatMessage.css";
import { useNavigate } from "react-router-dom";
import arrowBackIcon from "../images/arrow_back_white.svg";
import arrowRightIcon from "../images/keyboard_arrow_right_icon.svg";
import photoIcon from "../images/photo_icon.svg";
import sendIcon from "../images/send_icon.svg";

function ChatMessage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // ✅ 로컬 메시지 상태

  const chatBackClick = () => {
    navigate(`/Chat`);
  };

  const profileInfoClick = () => {
    navigate("/ProfileInfo");
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (message.trim() !== "") {
      setMessages([...messages, message]); // ✅ 입력한 메시지 저장
      setMessage(""); // ✅ 입력창 초기화
    }
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
                <p className="user_id">eugene.yml</p>
              </div>
            </div>
            <div className="chat_message_middle">
              <p className="time_line">2024년 11월 24일 일요일</p>
             
              {/* ✅ 로컬 메시지 상태를 화면에 출력 */}
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
