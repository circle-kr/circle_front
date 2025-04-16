import React from 'react';
import peopleIcon from '../images/people_icon.svg';
import likeIcon from '../images/favorite_black_icon.svg';
import unLikeIcon from '../images/favorite_stroke_black_icon.svg';

const CircleCardUi = ({ title, intro, number, liked, onToggleLike }) => {
    return (
        <div className='main_row_01'>
            <h4>{title}</h4>
            <p className='circle_intro'>{intro}</p>
            <p className='people_num'>
                <img src={peopleIcon} alt="인원수" />{number}
            </p>
            <button className='like_circle' onClick={onToggleLike}>
                <img src={liked ? likeIcon : unLikeIcon} alt="찜하기" />
            </button>
        </div>
    );
};

export default CircleCardUi;
