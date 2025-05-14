import React, { useState } from "react";
import Slider from "react-slick";
import '../JoinCircle.css'
import { profiles, activities, joiner } from '../mock/joinCircle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import strokeHeartIcon from '../images/favorite_stroke_icon.svg'
import heartIcon from '../images/favorite_icon.svg'
import communityPreviewIcon from '../images/visibility_icon.svg'
import activityIcon from '../images/activity_icon.svg'
import notificationIcon from '../images/notification_icon.svg'
import peopleIcon from '../images/people_icon.svg'
import Schedule from './Schedule'
function JoinCircle() {
    const [clickHeart, setClickHeart] = useState(strokeHeartIcon);
    const handleHeartClick = () => {
        setClickHeart(clickHeart === strokeHeartIcon ? heartIcon : strokeHeartIcon);
    };
    const [joinBtn, setJoinBtn] = useState("Join the Club");
    const handleJoinBtn = () => {
        setJoinBtn((prev) => (prev === "Join the Club" ? "Leave the Club" : "Join the Club"))
    }
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000
        };
        
    return(
    <main className='main sub_main grid_container'>
        <div className='join_circle_wrap'>
            <h2>Join circle <button onClick={handleHeartClick}><img src={clickHeart} alt="찜하기"/></button></h2>  
            <div className='join_circle_cont'>
                <div className="jc_container">
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
                            <p>wecome ! we make chill days~!</p>
                        </div>
                    </section>
                
                    <div className='btn_wrap'>
                        <button className='join_btn' onClick={handleJoinBtn}>{joinBtn} <span>→</span></button>
                        <button className='inquiry_btn'>1:1 inquiry <span>→</span></button>
                    </div>
                

                    <section className='community_preview'>
                        <div className='community_preview_cont'>
                            <h3><img src={communityPreviewIcon} alt='미리보기'/>Community preview</h3>
                            <div className="slider-container">
                            <Slider {...settings}>
                                {profiles.map((profile, index) => (
                                    <div className="profile_prev" key={index}>
                                        <img src={profile.imgSrc} alt={`${profile.nickname} 프로필 이미지`} />
                                        <dl>
                                            <dt>
                                                {profile.nickname} <time className="time">{profile.time}</time>
                                            </dt>
                                            <dd>{profile.text}</dd>
                                        </dl>
                                    </div>
                                ))}
                            </Slider>
                            <button className="go_community">자세히 보기</button>
                            <div className="filter"></div> 
                            </div>
                        </div>
                    </section>

                    <section className='activity'>
                        <div className='activity_cont'>
                            <h3><img src={activityIcon} alt=''/>Activity</h3>
                            {activities.map((activity, index) => (
                            <div className='activ_box' key={index}>
                                <img src={activity.imgSrc} alt="" />
                                <ul>
                                <li>{activity.contents}</li>
                                <li>{activity.time}</li>
                                </ul>
                            </div>
                            ))}
                        </div>
                    </section>

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
           
                    <section className='people'>
                        <div className='people_cont'>
                            <h3><img src={peopleIcon} alt=''/>People</h3>
                        <div className="p_container">
                            {joiner.map((people,index) => (
                            <div className='people_box' key={index}>
                                <img src="" alt="" />
                                <ul>
                                    <li className='p_name'>{people.name}</li>
                                    <li className='p_lang'>{people.language}</li>
                                    <li className='p_major'>{people.major}</li>
                                </ul>
                            </div>
                            ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>
    )
}
export default JoinCircle;