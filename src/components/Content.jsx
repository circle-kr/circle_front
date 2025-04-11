import React, { useState } from 'react'
import '../Content.css'
import arrowDownIcon from '../images/arrow_drop_down_icon.svg'
import arrowRightIcon from '../images/keyboard_arrow_right_icon.svg'
import peopleIcon from '../images/people_icon.svg'
import favoriteStrokeIcon from '../images/favorite_stroke_icon.svg'
function Content() {

    const [activeCategory,setActiveCategory] = useState('')
    const [categorytBtn,setCategoryBtn] = useState('')

    function handleCategoryChange(category){
        setActiveCategory(category)
        setCategoryBtn(category)
    }

    return(
    <main className='main join_circle_main'>
        <div className='join_circle_main_wrap'>
            <div className='like_circle_wrap'>
                <ul>
                    <li>♥ like circle list <img src={arrowDownIcon} alt="펼치기/접기" />
                        <ul>
                            <li>· circle <img src={arrowRightIcon} alt="이동하기" /></li>
                            <li>· circle <img src={arrowRightIcon} alt="이동하기" /></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className='join_circle_main_cont'>
                <div className='main_image_wrap'>
                    <div className='main_filter'></div>
                    <div className='logo_meaning'>
                        <p>" We connect, we unite-one circle, one world. "</p>
                    </div>
                </div>

                <section className='category_wrap'>
                    <div className='category_top'>
                        <button type='button' className={`category_01 ${activeCategory === 'category_01' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('category_01')}>music</button>
                        <button type='button' className={`category_01 ${activeCategory === 'category_02' ? 'active' : ''}`} 
                        onClick={() => handleCategoryChange('category_02')}>shopping</button>
                        <button type='button' className={`category_01 ${activeCategory === 'category_03' ? 'active' : ''}`} 
                        onClick={() => handleCategoryChange('category_03')}>food</button>
                        <button type='button' className={`category_01 ${activeCategory === 'category_04' ? 'active' : ''}`} 
                        onClick={() => handleCategoryChange('category_04')}>baking</button>
                        <button type='button' className={`category_01 ${activeCategory === 'category_05' ? 'active' : ''}`} 
                        onClick={() => handleCategoryChange('category_05')}>book</button>
                        <button type='button' className={`category_01 ${activeCategory === 'category_06' ? 'active' : ''}`} 
                        onClick={() => handleCategoryChange('category_06')}>sport</button>
                        <button type='button' className={`category_01 ${activeCategory === 'category_07' ? 'active' : ''}`} 
                        onClick={() => handleCategoryChange('category_07')}>game</button>
                        <button type='button' className={`category_01 ${activeCategory === 'category_08' ? 'active' : ''}`} 
                        onClick={() => handleCategoryChange('category_08')}>DIY</button>
                    </div>
                    <div className='category_bottom'>
                        <button type='button' className={`category_01 ${activeCategory === 'category_09' ? 'active' : ''}`}
                         onClick={() => handleCategoryChange('category_09')}>language</button>
                        <button type='button' className={`category_01 ${activeCategory === 'category_10' ? 'active' : ''}`}
                         onClick={() => handleCategoryChange('category_10')}>media</button>
                        <button type='button' className={`category_01 ${activeCategory === 'category_11' ? 'active' : ''}`}
                         onClick={() => handleCategoryChange('category_11')}>photo</button>
                        <button type='button' className={`category_01 ${activeCategory === 'category_12' ? 'active' : ''}`}
                         onClick={() => handleCategoryChange('category_12')}>animation</button>
                        <button type='button' className={`category_01 ${activeCategory === 'category_13' ? 'active' : ''}`}
                         onClick={() => handleCategoryChange('category_13')}>exhibition</button>
                        <button type='button' className={`category_01 ${activeCategory === 'category_14' ? 'active' : ''}`}
                         onClick={() => handleCategoryChange('category_14')}>casual</button>
                    </div>
                </section>

                <section className='main_circle_wrap'>
                    <div className='main_circle_field'>
                        <h3>{setActiveCategory}</h3>
                    </div>

                    <div className='main_circle_cont'>
                        <div className='main_row_01'>
                            <div>
                                <h4>Enhypen</h4>
                                <p className='circle_intro'>7명의 뱀파이어 소년들</p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" />7 / 7</p>
                                <button className='like_circle'><img src={favoriteStrokeIcon} alt="찜하기" /></button>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <button className='like_circle'><img src={favoriteStrokeIcon} alt="찜하기" /></button>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <button className='like_circle'><img src={favoriteStrokeIcon} alt="찜하기" /></button>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <button className='like_circle'><img src={favoriteStrokeIcon} alt="찜하기" /></button>
                            </div>
                        </div>


                        <div className='main_row_02'>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <button className='like_circle'><img src={favoriteStrokeIcon} alt="찜하기" /></button>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <button className='like_circle'><img src={favoriteStrokeIcon} alt="찜하기" /></button>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <button className='like_circle'><img src={favoriteStrokeIcon} alt="찜하기" /></button>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <button className='like_circle'><img src={favoriteStrokeIcon} alt="찜하기" /></button>
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
                                <button className='like_circle'><img src={favoriteStrokeIcon} alt="찜하기" /></button>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <button className='like_circle'><img src={favoriteStrokeIcon} alt="찜하기" /></button>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <button className='like_circle'><img src={favoriteStrokeIcon} alt="찜하기" /></button>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <button className='like_circle'><img src={favoriteStrokeIcon} alt="찜하기" /></button>
                            </div>
                        </div>

                        <div className='all_row_02'>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <button className='like_circle'><img src={favoriteStrokeIcon} alt="찜하기" /></button>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <button className='like_circle'><img src={favoriteStrokeIcon} alt="찜하기" /></button>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <button className='like_circle'><img src={favoriteStrokeIcon} alt="찜하기" /></button>
                            </div>
                            <div>
                                <h4></h4>
                                <p className='circle_intro'></p>
                                <p className='people_num'><img src= {peopleIcon} alt="인원수" /> </p>
                                <button className='like_circle'><img src={favoriteStrokeIcon} alt="찜하기" /></button>
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