import React, { useState } from 'react'
import '../Content.css'
import CircleCardUi from '../components/CircleCardUi'
import arrowDownIcon from '../images/arrow_drop_down_icon.svg'
import arrowRightIcon from '../images/keyboard_arrow_right_icon.svg'

function Content() {
    const [ isSelectedCategory, setIsSelectedCategory ] = useState('music');
    const [likedCircles, setLikedCircles] = useState({
        popular: {},
        all: {},
    });

    const handleFavoriteToggle = (type, circleTitle) => {
        setLikedCircles(prev => ({
            ...prev,
            [type]: {
                ...prev[type],
                [circleTitle]: !prev[type][circleTitle]
            }
        }));
    };

    const handleCategoryChange = (categoryName) => {
       setIsSelectedCategory(categoryName);
       console.log(categoryName);
    }

    const categories = [
        { name : "music" },
        { name : "shopping" },
        { name : "food" },
        { name : "baking" },
        { name : "book" },
        { name : "sport" },
        { name : "game" },
        { name : "DIY" },
        { name : "language" },
        { name : "media" },
        { name : "photo" },
        { name : "animation" },
        { name : "exhibition" },
        { name : "casual" }
    ]

    const populars = [
        { title : "enhypen", intro : "korean boy group", number : "7 / 7" },
        { title : "heeseung", intro : "main vocal", number : "25" },
        { title : "jay", intro : "lead vocal", number : "24" },
        { title : "jake", intro : "sub vocal", number : "24" },
        { title : "sunghoon", intro : "visual", number : "24" },
        { title : "sunoo", intro : "sub vocal", number : "23" },
        { title : "jungwon", intro : "leader", number : "22" },
        { title : "niki", intro : "dance", number : "21" },
    ]

    const alls = [
        { title : "enhypen", intro : "korean boy group", number : "7 / 7" },
        { title : "1", intro : "e", number : "" },
        { title : "2", intro : "", number : "" },
        { title : "3", intro : "", number : "" },
        { title : "4", intro : "", number : "" },
        { title : "5", intro : "e", number : "e" },
        { title : "6", intro : "", number : "" },
        { title : "7", intro : "", number : "" },
    ]

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
                    {categories.map((category, index) => (
                        <div className='category_top'
                        key={index}
                        onClick={()=>{handleCategoryChange(category.name)}}
                    >
                        <button type='button'
                        className={isSelectedCategory === category.name ? 'box_shadow' : ''}
                        >{category.name}</button>
                    </div>))}
                </section>

                <section className='main_circle_wrap'>
                    <div className='main_circle_field'>
                        <h3>{isSelectedCategory}</h3>
                    </div>

                    <div className='main_circle_cont'>
                        { populars.map((circle, index) => (
                            <CircleCardUi
                                className="circle_ui"
                                key={index}
                                title={circle.title}
                                intro={circle.intro}
                                number={circle.number}
                                liked={likedCircles.popular[circle.title]}
                                onToggleLike={() => handleFavoriteToggle('popular', circle.title)}
                            />
                        ))}
                    </div>
                </section> 

                <section className='all_circle_wrap'>
                    <div className='all_circle_field'>
                        <h3>모임 전체 보기</h3>
                    </div>

                    <div className='all_circle_cont'>
                        { alls.map((circle, index) => (
                            <CircleCardUi
                                className="circle_ui"
                                key={index}
                                title={circle.title}
                                intro={circle.intro}
                                number={circle.number}
                                liked={likedCircles.all[circle.title]}
                                onToggleLike={() => handleFavoriteToggle('all', circle.title)}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    </main>
    )
}
export default Content;