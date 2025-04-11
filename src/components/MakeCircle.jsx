import React from 'react'
import '../MakeCircle.css'
import Schedule from './Schedule'; 
import logoTxt from '../images/sticker_text.png'
import logoStar from '../images/sticker_star.png'

function MakeCircle() {
    const categories = [
        "language", "animation", "media", "photo", "exhibition",
        "shopping", "sport", "game", "DIY", "casual",
        "music", "book", "food", "baking"
    ];
    const charateristic = [
        "exciting","active","passtionate","sociable","friendly",
        "supportive","calm","cozy","creative","innovative",
    ]
    return(
    <main className='main sub_main'>
        <div className='make_circle_wrap'>
            <div className='make_circle_cont'>
                <h2>Make <br/>
                your circle !</h2>
                <div className='logo_wrap'>
                    <img src={logoTxt} alt="logo" className='logo_text'/>
                    <img src={logoStar} alt="logo" className='logo_star'/>
                </div>

                <form>
                    <section className='make_circle_name'>
                        <div className='make_circle_name_cont'>
                            <h3>① Make circle name</h3>
                            <textarea id='name' rows="1" placeholder='Enter 20 characters or less'></textarea>
                            <label htmlFor='name'></label>
                        </div>
                    </section>  

                    <section className='category_of_circle input_box'>
                        <div className='category_of_circle_cont'>
                            <h3>② Category of circle</h3>
                            {categories.map(category => (
                            <div key={category}>
                                <input type="radio" id={category} name="category" value={category} />
                                <label htmlFor={category}>{category}</label>
                            </div>
                            ))}
                        </div>
                    </section> 

                    <section className='charateristic_of_circle input_box'>
                        <div className='charateristic_of_circle_cont'>
                            <h3>③ Charateristic of circle <br/>
                            <span>(multiple options available)</span></h3>
                            {charateristic.map(charateristic => (
                            <div key={charateristic}>
                                <input type="checkbox" id={charateristic} name="charateristic" value={charateristic} />
                                <label htmlFor={charateristic}>{charateristic}</label>
                            </div>
                            ))}
                        </div>
                    </section>  

                    <section className='mc_notification'>
                        <div className='make_circle_notification_cont'>
                            <h3>④ Notification</h3>
                            <textarea id='notification' rows="6" placeholder='Enter 200 characters or less' maxLength={200}></textarea>
                            <label htmlFor='notification'></label>
                        </div>
                    </section>

                    <section className='introduce_of_circle'>
                        <div className='introduce_of_circle_cont'>
                            <h3>⑤ Introduce of circle</h3>
                            <textarea id='introduce' rows="18" placeholder='Enter 300 characters or less' maxLength={300}></textarea>
                            <label htmlFor='introduce'></label>
                        </div>
                    </section>

                    <section className='mc_schedule'>
                        <Schedule/>
                    </section>

                    <button className='mc_submit'>Submit <span>→</span></button>    
                </form>
            </div>             
        </div>
    </main>
    )
}
export default MakeCircle;