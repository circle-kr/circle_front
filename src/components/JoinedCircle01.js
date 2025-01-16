import React from 'react';
import '../JoinedCircle.css';
import notificationIcon from '../images/notification_icon.svg'
import feedIcon from '../images/feed_write_icon.svg'
import editIcon from '../images/edit_icon.svg'
function JoinedCircle01() {
    
    return(
    <main className='main sub_main'>
        <div className='joined_circle_wrap'>
            <h2>써클 1</h2>
            <div className='joined_circle_cont'>
                <section className='intro'>
                    <div className='intro_cont'>
                        
                    </div>
                </section>

                <section className="schedule">
                   <div className="schedule_cont">
                       
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
                    </div>
                </section>
           
            </div>
        </div>
    </main>
    )
}
export default JoinedCircle01;