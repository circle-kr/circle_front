import React, { useState } from 'react';
import JoinedCircle01 from './JoinedCircle01';
import '../JoinedCircle.css';
function JoinedCircle() {
    const [selectedCircle, setSelectedCircle] = useState(null);
  
    const circles = [
        { id: 1, name: '모임 1', link: '/circle1' },
        { id: 2, name: '모임 2', link: '/circle2' },
        { id: 3, name: '모임 3', link: '/circle3' }
    ];

    const handleClick = (circle) => {
        setSelectedCircle(circle); // 클릭한 모임을 상태로 설정
    };
    return(
    <main className='main sub_main'>
        <div className='joined_circle_wrap'>
            <h2></h2>
            <div className='joined_circle_cont'>
            <ul>
                {circles.map((circle) => (
                <li key={circle.id}>
                    <button onClick={() => handleClick(circle)}>
                    {circle.name}
                    </button>
                </li>
                ))}
            </ul>

            {selectedCircle && (
                <JoinedCircle01 circle={selectedCircle} />
            )}
            </div>
        </div>
    </main>
    )
}
export default JoinedCircle;