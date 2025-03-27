import { useNavigate, useLocation } from "react-router-dom";
import arrowBack from "../images/arrow_back_icon.svg";
import "../RequestPopUp.css";

function RequestPopUp() {
    const navigate = useNavigate();
    const location = useLocation();
    const type = location.state?.type || '';  
    const historyBack = () => {
        navigate(-1);
    };
    const requests = [
        {
            type: "req_follow",
            text: "팔로우 요청",
            nicknames: ["heeseung_lee", "nisimura_niki", "jungwon_o"], 
        },
        {
            type: "req_join",
            text: "가입 요청",
            nicknames: ["jongsoong", "jake_sim", "sunooo_o","sunghoony"],
        },
    ];
    const selectedRequest = requests.find((request) => request.type === type);
    
    return (
        <main className="main sub_main">
            <div className="request_popup_wrap">
                <h2>Notification</h2>
                {selectedRequest ? (
                    <div className="follow_cont">
                         <button className="back_btn" onClick={historyBack}>
                    <img src={arrowBack} alt="돌아가기" />
                </button>
                        <h3>{selectedRequest.text}</h3>
                        {selectedRequest.nicknames.map((nickname, index) => (
                            <div className="follow_box1" key={index}>
                                <p className="nickname">{nickname}</p>
                                <div className="follow_btn_wrap">
                                    <button className="accept_btn">Accept</button>
                                    <button className="reject_btn">Reject</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>요청된 데이터가 없습니다.</p>
                )}
            </div>
        </main>
    );
}

export default RequestPopUp;
