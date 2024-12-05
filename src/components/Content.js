import React from 'react'
import '../Content.css'
import arrowDownIcon from '../images/arrow_drop_down_icon.svg'
import arrowRight from '../images/keyboard_arrow_right_icon.svg'
import peopleIcon from '../images/people_icon.svg'
function Content() {
    return(
    <main className='main join_circle_main'>
        <div className='join_circle_main_wrap'>
            <div className='like_circle_wrap'>
                <ul>
                    <li>♥ like circle list <img src={arrowDownIcon} alt="펼치기/접기" />
                        <ul>
                            <li>· circle <img src={arrowRight} alt="이동하기" /></li>
                            <li>· circle <img src={arrowRight} alt="이동하기" /></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className='join_circle_main_cont'>
                <div className='main_image_wrap'>
                    
                </div>

                <section className='category_wrap'>

                </section>

                <section className='popular_circle_wrap'>
                    <div className='popular_circle_field'>
                        <h3>현재 인기있는 모임</h3>
                    </div>

                    <div className='popular_circle_cont'>
                        <div className='popular_row_01'>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <span>♡</span>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <span>♡</span>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <span>♡</span>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <span>♡</span>
                            </div>
                        </div>

                        <div className='popular_row_02'>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <span>♡</span>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <span>♡</span>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <span>♡</span>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <span>♡</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='all_circle_wrap'>
                    <div className='all_circle_field'>
                        <h3>모임 전체 보기</h3>
                    </div>

                    <div className='all_circle_cont'>
                    <div className='all_row_01'>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <span>♡</span>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <span>♡</span>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <span>♡</span>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <span>♡</span>
                            </div>
                        </div>

                        <div className='all_row_02'>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <span>♡</span>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <span>♡</span>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <span>♡</span>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <span>♡</span>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </main>
    )
}
export default Content;