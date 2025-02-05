import React from 'react'
import '../MakeCircle.css'
import Schedule from './Schedule';

function MakeCircle() {
    return(
    <main className='main sub_main'>
        <div className='make_circle_wrap'>
            <h2>Make <br/>
            your circle !</h2>
            <div className='make_circle_cont'>
                
            <section className='make_circle_name'>
                <div className='make_circle_name_cont'>
                    <form>
                        <h3>① Make circle name</h3>
                        <textarea rows="1" placeholder='Enter 20 characters or less'></textarea>
                    </form>
                </div>
            </section>  

            <section className='category_of_circle'>
                <div className='category_of_circle_cont'>
                    <h3>② Category of circle</h3>
                </div>
            </section>   

            <section className='charateristic_of_circle'>
                <div className='charateristic_of_circle_cont'>
                    <h3>③ Charateristic of circle <br/>
                    <span>(multiple options available)</span></h3>
                </div>
            </section>  

             <section className='mc_notification'>
                <div className='make_circle_notification_cont'>
                    <form>
                        <h3>④ Notification</h3>
                        <textarea rows="5" placeholder='Enter 200 characters or less'></textarea>
                    </form>
                </div>
            </section>

            <section className='introduce_of_circle'>
                <div className='introduce_of_circle_cont'>
                    <form>
                        <h3>⑤ Introduce of circle</h3>
                        <textarea rows="16" placeholder='Enter 300 characters or less'></textarea>
                    </form>
                </div>
            </section>

            <section className='mc_schedule'>
                <Schedule/>
            </section>

            <button className='mc_submit'>Submit <span>→</span></button>    
            </div>             
        </div>
    </main>
    )
}
export default MakeCircle;