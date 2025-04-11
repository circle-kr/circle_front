import {React,useNavigate} from 'react-router-dom'
import '../Notification.css'
import moreIcon from '../images/more_icon.svg'

function Notification() {
    const navigate = useNavigate();
    const requestList = (type) => {
        navigate('/RequestPopUp',  { state: { type } }); // 한 번에 하나만 전달
    }
    const notices = [
        {
            type : "req_follow",
            content : "팔로우 요청",
            count : "+3"
        },
        {
            type : "req_join",
            content : "가입 요청",
            count : "+4"
        },
        {
            type : "mention",
            nickname : "hellomonkey",
            content : "님이 회원님을 게시글에 언급하였습니다.",
            time : "7시간"
        },
        {
            type : "mention",
            nickname : "chkchk",
            content : "님이 회원님의 댓글에 좋아요를 남겼습니다.",
            time : "12시간"
        }
    ]
    return(
    <main className='main sub_main'>
        <div className='menu_notification_wrap'>
            <h2>Notification</h2>
            <div className='notification_cont'>
            {notices.map((notice, index) => ( 
                <div className= 'notification_box1' key={index}>
                    <span><img src="" alt="" /></span>
                    {notice.type === "req_follow" || notice.type === "req_join" ? (
                    <p className="req_bold">
                        {notice.content} <span>{notice.count}</span>
                    </p>
                    ) : notice.type === "mention" ? (
                    <p>
                        <span className="nickname">{notice.nickname}</span>
                        {notice.content}<span className="time_ago">{notice.time}</span>
                    </p>
                    ) : null}
                    {(notice.type === "req_follow" || notice.type === "req_join") && (
                    <button className="more_btn" onClick={() => requestList(notice.type)}>
                        <img src={moreIcon} alt="더보기" />
                    </button>
                    )}
                </div>
                    ))}
            </div>
        </div>
    </main>
    )
}
export default Notification;