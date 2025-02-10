import React from 'react'
import '../JoinCircle.css'
import favoriteStrokeIcon from '../images/favorite_stroke_icon.svg'
import communityPreviewIcon from '../images/visibility_icon.svg'
import activityIcon from '../images/activity_icon.svg'
import notificationIcon from '../images/notification_icon.svg'
import peopleIcon from '../images/people_icon.svg'
import Schedule from './Schedule'
function JoinCircle() {
    return(
    <main className='main sub_main'>
        <div className='join_circle_wrap'>
            <h2>Join circle <img src={favoriteStrokeIcon} alt="찜하기" /></h2>
            <div className='join_circle_cont1'>
                <section className='intro'>
                    <div className='intro_cont'> 
                        <h3>Hello, chill guys~!</h3>
                        <div className='tag_wrap'>
                            <div className='category_tag'>
                                category
                            </div>
                            <div className='charateristic_tag'>
                                charateristic
                            </div>
                        </div>
                        <p>contents</p>
                    </div>
                </section>
                
                <div className='btn_wrap'>
                    <button className='join_btn'>Join the Club <span>→</span></button>
                    <button className='inquiry_btn'>1:1 inquiry <span>→</span></button>
                </div>
            </div>

            <div className='join_circle_cont2'>
                <section className='community_preview'>
                    <div className='community_preview_cont'> 
                        <h3><img src={communityPreviewIcon} alt='미리보기'/>Community preview</h3>
                        <div className='prev_box'>
                            <div className='prev_left'></div>
                            <div className='prev_right'>
                                <p>Nickname <span className='prev_time'>time</span></p>
                                <p>contents</p>
                            </div>
                        </div>
                        <div className='pager'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </section>

                <section className='activity'>
                    <div className='activity_cont'>
                        <h3><img src={activityIcon} alt=''/>Activity</h3>
                        <div className='activ_box'>
                            <img src="" alt="" />
                            <ul>
                               <li>Activity contents</li>
                               <li>time</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <div className='join_circle_cont3'>
                <section className='notification jc_notification'>
                    <div className='notification_cont'>
                        <h3><img src={notificationIcon} alt=''/>Notification</h3>
                        <p>contents</p>
                    </div>
                </section>
                <section className='schedule'>
                    <div className='schedule_cont'>
                        <Schedule/>
                    </div>
                </section>
            </div>
           
            <section className='people'>
                <div className='notification_cont'>
                    <h3><img src={peopleIcon} alt=''/>People</h3>
                    <div className='people_box'>
                        <img src="" alt="" />
                        <ul>
                            <li className='p_name'>name</li>
                            <li className='p_lang'>language</li>
                            <li className='p_major'>major</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </main>
    )
}
export default JoinCircle;