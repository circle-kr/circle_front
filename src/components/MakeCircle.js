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

    const Charateristic = [
        "exciting","active","passtionate","sociable","friendly",
        "supportive","calm","cozy","creative","innovative",
    ]
    return(
    <main className='main sub_main'>
        <div className='make_circle_wrap'>
            <h2>Make <br/>
            your circle !</h2>
            <div className='logo_wrap'>
                <img src={logoTxt} alt="logo" className='logo_text'/>
                <img src={logoStar} alt="logo" className='logo_star'/>
            </div>

            <div className='make_circle_cont'>
                <form>
                    <section className='make_circle_name'>
                        <div className='make_circle_name_cont'>
                            <h3>① Make circle name</h3>
                            <label><textarea rows="1" placeholder='Enter 20 characters or less'></textarea></label>
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

                    <div className='layout_middle'>
                        <section className='charateristic_of_circle input_box'>
                            <div className='charateristic_of_circle_cont'>
                                <h3>③ Charateristic of circle <br/>
                                <span>(multiple options available)</span></h3>
                                {Charateristic.map(Charateristic => (
                                <div key={Charateristic}>
                                    <input type="checkbox" id={Charateristic} name="Charateristic" value={Charateristic} />
                                    <label htmlFor={Charateristic}>{Charateristic}</label>
                                </div>
                                ))}
                            </div>
                        </section>  

                        <section className='mc_notification'>
                            <div className='make_circle_notification_cont'>
                                <h3>④ Notification</h3>
                                <label><textarea rows="5" placeholder='Enter 200 characters or less'></textarea></label>
                            </div>
                        </section>

                        <section className='introduce_of_circle'>
                            <div className='introduce_of_circle_cont'>
                                <h3>⑤ Introduce of circle</h3>
                                <label><textarea rows="16" placeholder='Enter 300 characters or less'></textarea></label>
                            </div>
                        </section>
                    </div>

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