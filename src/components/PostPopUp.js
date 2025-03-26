import React, {useEffect, useRef,useState} from 'react'
import '../PostPopUp.css'
import closeIcon from '../images/close_icon_black.svg'
import photoIcon from '../images/photo_icon.svg'

function PostPopUp({onClose}) {
    const [ text, setText ] = useState('');
    const handleInputChange = (e) => {
        setText(e.target.value);
    }
    const textareaRef = useRef(null);
        const fileInputRef = useRef(null);

    useEffect( () => {
        if(textareaRef.current){
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    })

    const handleClick = () => {
        fileInputRef.current.click(); // 파일 업로드 input 클릭 트리거
      };
  return (
    <div className="popup-overlay" >
      <div className="popup-content">
      <button onClick={onClose} className='post_close'><img src={closeIcon} alt="" /></button>
        <div className='popup_top'>
            <div><img src="" alt="" /></div>
            <textarea 
            onChange={handleInputChange}
            placeholder="Share your daily life!" 
            />
        </div>
        
        <div className='popup_bottom'>
             {/* 숨겨진 파일 업로드 input */}
            <input 
                type="file" 
                ref={fileInputRef} 
                style={{ display: "none" }} 
            />
            
            {/* 이미지 클릭 시 파일 업로드 실행 */}
            <img 
                src={photoIcon} 
                alt="사진 추가" 
                onClick={handleClick} 
                style={{ cursor: "pointer" }} 
                className='post_photo'
            />
            <button className='post_btn'>Post</button>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(PostPopUp);