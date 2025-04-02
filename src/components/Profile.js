import React, {useState,useRef} from 'react'
import { useForm } from 'react-hook-form'
import '../Profile.css'
import cameraIcon from '../images/camera_icon.svg'
import editIcon from '../images/edit_icon.svg'
import saveIcon from '../images/save_icon.svg'
function Profile() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(null);
    const handleClick = () => {
        fileInputRef.current.click(); // 파일 업로드 input 클릭 트리거
      };

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // 첫 번째 파일만 가져오기
        if (file) {
        const imageUrl = URL.createObjectURL(file); // URL 생성
        setPreview(imageUrl); // 미리보기 상태 업데이트
        }
    };

    const onSubmit = (data) => {
    console.log(data);
    };

    return(
    <main className='main sub_main'>
        <div className='profile_wrap'>
            <h2>Profile</h2>
            <div className='profile_cont'>
                <form method='get' onSubmit={handleSubmit(onSubmit)}>
                <div className='profile_top'>
                    <div className='profile_img_wrap'>
                        <input type="file" name="profileImage" id="fi" 
                        style={{"display" : "none"}}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        />
                        <div className='camera_icon'>
                            <img src={cameraIcon} alt="사진 불러오기" onClick={handleClick}/>
                        </div>
                        <div className='profile_img'>
                            {preview && (
                            <div
                            className="profile_img"
                            style={{
                                backgroundImage: `url(${preview})`,
                                backgroundSize: "cover"
                            }}
                            />
                            )}
                        </div>
                    </div>
                    <div className='profile_top_btn'>
                        <button>Edit <img src={editIcon} alt="편집하기" /></button>
                        <button>Save <img src={saveIcon} alt="저장하기" /></button>
                    </div>
                </div>
                <div className='profile_bottom'>
                    <div className='profile_input'>
                            <div className='profile_bottom_01'>
                                <label htmlFor='fn'>
                                    <span>First name</span>
                                    <input type="text" name="firstName" id="fn" placeholder='First name' 
                                    {...register("firstName", {
                                        pattern: {
                                            value: /^[a-zA-Z]+$/,
                                            message: "First name should only contain letters."
                                        },
                                        })}
                                    />
                                    {errors.firstName && <p className="error">{errors.firstName.message}</p>}
                                </label>
                            
                                <label htmlFor='ln'>
                                    <span>Last name</span>
                                    <input type="text" name="lastName" id="ln" placeholder='Last name'
                                    {...register("lastName", {
                                        pattern: {
                                        value: /^[a-zA-Z]+$/,
                                        message: "Last name should only contain letters."
                                        },
                                    })}
                                    />
                                    {errors.lastName && <p className="error">{errors.lastName.message}</p>}
                                </label>
                                
                                <label htmlFor='nn'>
                                    <span>Nick name</span>
                                    <input type="text" name="nickname" id="nn" placeholder='Nick name' oninput="checkInput()"
                                    {...register("nickName",
                                        {
                                    validate: {
                                        startsWithLetter: (value) =>
                                        /^[a-zA-Z]/.test(value) || "Nickname must start with a letter. Examples: 'John_123', 'JaneDoe'",
                                        validFormat: (value) =>
                                        /^[a-zA-Z][a-zA-Z0-9_]{3,11}$/.test(value) ||
                                        "Enter 4-12 characters, including letters, numbers, and “_”",
                                    },
                                    })}
                                    />
                                    {errors.nickName && <p className="error">{errors.nickName.message}</p>}
                                </label>
                            </div>

                            <div className='profile_bottom_02'>
                                <label htmlFor='sc'>
                                    <span>School</span>
                                    <input type="text" name="school" id="sc" placeholder='School'
                                    {...register("school", {
                                        pattern: {
                                            value: /^[a-zA-Z]+$/,
                                            message: "School should only contain letters."
                                        },
                                        })}
                                    />
                                    {errors.school && <p className="error">{errors.school.message}</p>}
                                </label>

                                <label htmlFor='mj'>
                                    <span>Major</span>
                                    <input type="text" name="major" id="mj" placeholder='Major'
                                    {...register("major", {
                                        pattern: {
                                            value: /^[a-zA-Z]+$/,
                                            message: "Major should only contain letters."
                                        },
                                        })}
                                    />
                                    {errors.major && <p className="error">{errors.major.message}</p>}
                                </label>
                            </div>

                            <div className='profile_bottom_03'>
                                <label htmlFor='co'>
                                    <span>Country</span>
                                    <input type="text" name="country" id="co" placeholder='Country'
                                    {...register("country", {
                                        pattern: {
                                            value: /^[a-zA-Z]+$/,
                                            message: "Country should only contain letters."
                                        },
                                        })}
                                    />
                                    {errors.country && <p className="error">{errors.country.message}</p>}
                                </label>

                                <label htmlFor='la'>
                                    <span>Language <span style={{"display" : "inline"}}>*multiple options available</span></span>
                                    <select name="languages" id='la'>
                                        <option value='korea'>Korea</option>
                                        <option value='japan'>Japan</option>
                                        <option value='china'>China</option>
                                        <option value='us'>United state</option>
                                        <option value='uk'>United kingdom</option>
                                    </select>
                                </label>
                            </div>

                            <div className='profile_bottom_04'>
                                <label htmlFor='bio'>
                                    <span>Bio</span>
                                    <input type="text" name="bio" id="bio" placeholder='Bio'/>
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
    )
}
export default Profile;