import React from 'react';
import '../JoinedCircle.css';
import Schedule from './Schedule';
import notificationIcon from '../images/notification_icon.svg'
import feedIcon from '../images/feed_write_icon.svg'
import editIcon from '../images/edit_icon.svg'
import moreIcon from '../images/more_icon.svg'
import photoIcon from '../images/photo_icon.svg'
import favoriteIcon from '../images/favorite_stroke_icon.svg'
import commentIcon from '../images/chat_icon.svg'


function JoinedCircle01() {
    const categoryBtn = ["category"];
    const charateristicBtn = ["charateristic1","charateristic2"];
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
                        <h3><img src={feedIcon} alt=''/>Feed <img src={editIcon} alt='편집하기'/></h3>
                        <div className='sns_box'>
                            <div className='sns_top'>
                                <img src="" alt="" className='profile_img'/>
                                <h4>nickname</h4>
                                <div className='top_btn_wrap'>
                                    <button className='follow'>Follow</button>
                                    <button><img src={moreIcon} alt="" /></button>
                                </div>
                            </div>
                            <div className='sns_bottom'>
                                <div className='sns_img'>
                                    <img src="" alt="" />
                                </div>
                                <div className='bottom_btn_wrap'>
                                    <button><img src={favoriteIcon} alt="" /></button>
                                    <button><img src={commentIcon} alt="" /></button>
                                </div>
                                <p><span>nickname1</span>님 외 여러 명이 좋아합니다.</p>
                                <p><span>nickname2</span> comments1</p>
                                <p><span>nickname3</span> comments2</p>
                                <time>11월 18일</time>
                            </div>
                        </div>
                    </div>
                </section>
           
            </div>
        </div>
    </main>
    )
}
export default JoinedCircle01;