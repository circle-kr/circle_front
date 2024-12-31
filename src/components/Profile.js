import React from 'react'
import '../Profile.css'
import cameraIcon from '../images/camera_icon.svg'
import editIcon from '../images/edit_icon.svg'
import saveIcon from '../images/save_icon.svg'
import arrowBottomIcon from '../images/keyboard_arrow_down_icon.svg'

function Profile() {
    return(
    <main className='main sub_main'>
        <div className='profile_wrap'>
            <h2>Profile</h2>
            <div className='profile_cont'>
                <div className='profile_top'>
                    <div className='profile_img_wrap'>
                        <div className='profile_img'>
                        </div>
                        <button className='camera_icon'><img src={cameraIcon} alt="촬영하기" /></button>
                    </div>
                    <div className='profile_top_btn'>
                        <button>Edit <img src={editIcon} alt="편집하기" /></button>
                        <button>Save <img src={saveIcon} alt="저장하기" /></button>
                    </div>
                </div>
                <div className='profile_bottom'>
                    <form>
                        <div className='profile_bottom_01'>
                            <div>
                                <p>First name</p>
                                <input type="text" name="" id="" placeholder='First name'/>
                            </div>
                           
                            <div>
                                <p>Last name</p>
                                <input type="text" name="" id="" placeholder='Last name'/>
                            </div>
                            
                            <div>
                                <p>Nick name</p>
                                <input type="text" name="" id="" placeholder='Nick name'/>
                            </div>
                        </div>

                        <div className='profile_bottom_02'>
                            <div>
                                <p>School</p>
                                <input type="text" name="" id="" placeholder='School'/>
                            </div>

                            <div>
                                <p>Major</p>
                                <input type="text" name="" id="" placeholder='Major'/>
                            </div>
                        </div>

                        <div className='profile_bottom_03'>
                            <div>
                                <p>Country</p>
                                <input type="text" name="" id="" placeholder='Country'/>
                            </div>

                            <div>
                                <p>Language <span>*multiple options available</span></p>
                                <select>
                                    <option value='korea'>Korea</option>
                                    <option value='japan'>Japan</option>
                                    <option value='china'>China</option>
                                    <option value='us'>United state</option>
                                    <option value='uk'>United kingdom</option>
                                </select>
                            </div>
                        </div>

                        <div className='profile_bottom_04'>
                            <div>
                                <p>Bio</p>
                                <input type="text" name="" id="" placeholder='Bio'/>
                            </div>
                        </div>
                       

                        
                    </form>
                </div>
            </div>
        </div>
    </main>
    )
}
export default Profile;