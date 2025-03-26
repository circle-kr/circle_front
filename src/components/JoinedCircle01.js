import { useState,useRef,useEffect} from 'react';
import React from 'react';
import '../JoinedCircle.css';
import Schedule from './Schedule';
import PostPopUp from './PostPopUp';
import notificationIcon from '../images/notification_icon.svg'
import feedIcon from '../images/chat_icon.svg'
import feedWriteIcon from '../images/feed_write_icon.svg'
import moreIcon from '../images/more_icon.svg'
import closeIcon from '../images/close_icon_black.svg'
import unlikedIcon from '../images/favorite_stroke_icon.svg'
import likedIcon from '../images/favorite_icon.svg'
import commentIcon from '../images/chat_icon.svg'

function JoinedCircle01() {
    const categoryBtn = ["category"];
    const charateristicBtn = ["charateristic1","charateristic2"];
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isFollowed, setIsFollowed] = useState(false);
    const [isMoreVisible, setIsMoreVisible] = useState(false); // State for popup visibility
    const [isLiked, setIsLiked] = useState(unlikedIcon);
    const [isCommentLiked, setIsCommentLiked] = useState(unlikedIcon);

    const followToggle = () => {
        setIsFollowed(!isFollowed)
    }

    const morePopUpClick = (event) => {
        event.stopPropagation(); // 이벤트 버블링 방지
        setIsMoreVisible(!isMoreVisible)
    }

    const closePopup = () => {
        setIsMoreVisible(false);
      }

    const popupRef = useRef(null);
    // 팝업 외부 클릭 시 팝업 닫기

  useEffect(() => {
    const handleClickOutside = (event) => {
        console.log("부모")
        setTimeout(() => closePopup(), 0); // 0ms 딜레이 후 실행
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup(); // 외부 클릭 시 팝업 닫기
      }
    };

    // 이벤트 리스너 추가
    document.addEventListener('click', handleClickOutside);

    // 클린업 함수
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  

    const likedToggle = () => {
        setIsLiked(isLiked === unlikedIcon ? likedIcon : unlikedIcon )
    }

    const commentLiked = () => {
        setIsCommentLiked(isCommentLiked === unlikedIcon ? likedIcon : unlikedIcon )
    }

    return(
    <main className='main sub_main'>
        <div className='joined_circle_wrap'>
            <h2>써클 1</h2>
            <div className='joined_circle_cont'>
                <section className='intro'>
                    <div className='intro_cont'>
                        <h3>Hello, chill guys~!</h3>
                        <div className='tag_wrap'>
                            <div className='category_tag'>
                                {categoryBtn}
                            </div>
                            {charateristicBtn.map( charateristic => (
                            <div className='charateristic_tag' key={charateristic}>
                                {charateristic}
                            </div>
                            ))}
                        </div>
                        <p>contents</p>
                    </div>
                </section>

                <section className="schedule">
                   <div className="schedule_cont">
                       <Schedule />
                   </div>
                </section>

                <section className='notification'>
                    <div className='notification_cont'>
                        <h3><img src={notificationIcon} alt=''/>Notification</h3>
                    </div>
                </section>

                <section className='feed'>
                    <div className='feed_cont'>
                        <h3><img src={feedIcon} alt=''/>Feed </h3><button className='feed_write' onClick={() => setIsPopupOpen(true)}><img src={feedWriteIcon} alt='글쓰기'/></button>
                        {isPopupOpen && <PostPopUp ref={popupRef} onClose={() => setIsPopupOpen(false)}  />}
                        <div className='sns_box'>
                            <div className='sns_top'>
                                <img src="" alt="" className='profile_img'/>
                                <h4>nickname</h4>
                                <div className='top_btn_wrap'>
                                    <button className={`follow ${isFollowed ? 'fw_clicked' : ""}`} onClick={followToggle} key={isFollowed}>Follow</button>
                                    <button onClick={morePopUpClick} className='sns_more'><img src={moreIcon} alt="" /></button>
                                </div>
                            </div>

                            <>
                            {isMoreVisible === true &&(
                            <div className='popup_wrap' ref={popupRef}>
                                <button onClick={closePopup}><img src={closeIcon} alt="닫기" /></button>
                                <p>Edit</p>
                                <p>Delete</p>
                            </div>
                            )} 
                            </>     

                            <div className='sns_bottom'>
                                <div className='sns_img'>
                                    <img src="" alt="" />
                                </div>
                                <div className='bottom_btn_wrap'>
                                    <button className='sns_like' onClick={likedToggle}><img src={isLiked} alt="좋아요" /></button>
                                    <button className='sns_comment'><img src={commentIcon} alt="댓글" /></button>
                                </div>

                                <div className='comment_cont'>
                                    <p><span>nickname1</span>님 외 여러 명이 좋아합니다.</p>
                                    <p className='comm_align'><span>nickname2</span> comments1
                                    <button onClick={commentLiked} className='comm_like'>
                                        <img src={isCommentLiked} alt="댓글 좋아요" />
                                    </button>
                                    </p>
                                </div>
                                <time>11월 18일</time>
                            </div>
                        </div>
                    </div>
                </section>
           
            </div>
        </div>
    </main>
    )}
export default JoinedCircle01;