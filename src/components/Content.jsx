import React, { useState, useEffect } from 'react'
import '../Content.css'
import { populars } from '../mock/content';
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

 
        const [isExpanded, setIsExpanded] = useState(false);
        const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
      
        useEffect(() => {
            const handleResize = () => {
              setIsMobile(window.innerWidth <= 768);
            };
            window.addEventListener('resize', handleResize);
        
            return () => window.removeEventListener('resize', handleResize);
          }, []);
        
          const visibleCategories = isMobile && !isExpanded
            ? categories.slice(0, 4)
            : categories;
        
          const toggleExpanded = () => setIsExpanded(prev => !prev);
   
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
                    {visibleCategories.map((category, index) => (
                        <div className='category_top'
                        key={index}
                        onClick={()=>{handleCategoryChange(category.name)}}
                    >
                        <button type='button'
                        className={isSelectedCategory === category.name ? 'box_shadow' : ''}
                        >{category.name}</button>
                    </div>))}

                    <button className="toggle_button" onClick={toggleExpanded}>
                    {isExpanded ? '접기 ▲' : '펼치기 ▼'}
      </button>
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
                        { populars.map((circle, index) => (
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