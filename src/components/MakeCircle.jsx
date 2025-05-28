import React, { useState } from 'react'
import axios from 'axios';
import '../MakeCircle.css'
import Schedule from './Schedule'; 
import logoTxt from '../images/sticker_text.png'
import logoStar from '../images/sticker_star.png'

function MakeCircle() {
    const [ isMakeCircle, setIsMakeCircle ] = useState(false);
    const [ circleName, setCircleName ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ characteristics, setCharacteristics ] = useState([]);
    const [ notification, setNotification ] = useState('');
    const [ introduce, setIntroduce ] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    if (!circleName || !category || !notification || !introduce) {
    alert('모든 필드를 입력해주세요.');
    return;
    }

      try {
       const res = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/circles`,
      
      {
        name: circleName,
        introduce: introduce,
        notification: notification,
        category: category.toUpperCase(), 
        characteristics: characteristics.map(c => c.toUpperCase())
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
        console.log('서클 생성 성공:', res.data);
        setIsMakeCircle(true);
      } catch (error) {
        console.error('서클 생성 실패:', error);
        setIsMakeCircle(false);
      }
    };

    const categories = [
        "language", "animation", "media", "photo", "exhibition",
        "shopping", "sport", "game", "DIY", "casual",
        "music", "book", "food", "baking"
    ];

    const characteristic = [
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

                <form onSubmit={handleSubmit}>
                    <section className='make_circle_name'>
                        <div className='make_circle_name_cont'>
                            <h3>① Make circle name</h3>
                            <textarea
                            value={circleName}
                            onChange={(e) => setCircleName(e.target.value)} 
                            id='name'
                            rows="1"
                            placeholder='Enter 20 characters or less'
                            maxLength={20}
                            ></textarea>
                            <label htmlFor='name'></label>
                        </div>
                    </section>  

                    <section className='category_of_circle input_box'>
                        <div className='category_of_circle_cont'>
                            <h3>② Category of circle</h3>
                            {categories.map(cat => (
                            <div key={cat}>
                                <input
                                type="radio"
                                id={cat}
                                checked={category === cat}  
                                name="category"
                                value={cat} 
                                onChange={(e) => setCategory(e.target.value)} 
                                />
                                <label htmlFor={cat}>{cat}</label>
                            </div>
                            ))}
                        </div>
                    </section> 

                    <section className='characteristic_of_circle input_box'>
                        <div className='characteristic_of_circle_cont'>
                            <h3>③ characteristic of circle <br/>
                            <span>(multiple options available)</span></h3>
                            {characteristic.map(char => (
                            <div key={char}>
                                <input
                                type="checkbox"
                                id={char}
                                name="characteristic"
                                value={char}
                                checked={characteristics.includes(char)}
                                onChange={(e) => {
                                const value = e.target.value;
                                if (e.target.checked) {
                                    setCharacteristics(prev => [...prev, value]);
                                } else {
                                    setCharacteristics(prev => prev.filter(item => item !== value));
                                }
                                }}
                                />
                                <label htmlFor={char}>{char}</label>
                            </div>
                            ))}
                        </div>
                    </section>  

                    <section className='mc_notification'>
                        <div className='make_circle_notification_cont'>
                            <h3>④ Notification</h3>
                            <textarea
                            value={notification}
                            onChange={(e) => setNotification(e.target.value)} 
                            id='notification'
                            rows="8"
                            placeholder='Enter 200 characters or less'
                            maxLength={200}></textarea>
                            <label htmlFor='notification'></label>
                        </div>
                    </section>

                    <section className='introduce_of_circle'>
                        <div className='introduce_of_circle_cont'>
                            <h3>⑤ Introduce of circle</h3>
                            <textarea
                            value={introduce}
                            onChange={(e) => setIntroduce(e.target.value)} 
                            id='introduce'
                            rows="18"
                            placeholder='Enter 300 characters or less'
                            maxLength={300}></textarea>
                            <label htmlFor='introduce'></label>
                        </div>
                    </section>

                    <section className='mc_schedule'>
                        <Schedule/>
                    </section>

                    <button className='mc_submit' type='submit'>Submit <span>→</span></button>    
                </form>
            </div>             
        </div>
    </main>
    )
}
export default MakeCircle;