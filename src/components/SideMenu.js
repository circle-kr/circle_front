import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import '../SideMenu.css'
import arrowBottomIcon from '../images/keyboard_arrow_down_icon.svg' 
import arrowRightIcon from '../images/keyboard_arrow_right_icon.svg'

function SideMenu({collapsed}) {
  const [listToggle,setListToggle] = useState(false);
  const likeCircleToggle = () => {
    setListToggle(!listToggle); 
  }
    return(
        <div className='side_menu_wrap'>
        <Sidebar collapsed={collapsed} className='side_menu_cont'>
          <Menu>
            <MenuItem
              component={<Link to="/JoinCircle" className="join_circle" />}
              className="menu1"
            >
              <h2>· Join circle</h2>
            </MenuItem>

            <MenuItem
              component={<Link to="/MakeCircle" className="make_circle" />}
              className="menu2"
                >
              <h2>· Make circle</h2>
            </MenuItem>

            <SubMenu className='h2' label="· JoinedCircle">
            <MenuItem component={<Link to="/JoinedCircle01" className="joined_circle01" />}>- Timeline Chart </MenuItem>
            <MenuItem component={<Link to="/JoinedCircle02" className="joined_circle02" />}>- Bubble Chart </MenuItem>
          </SubMenu>

          <MenuItem
              component={<Link to="/Notification" className="notification" />}
              className="menu3"
                >
              <h2>· Notification</h2>
            </MenuItem>

            <MenuItem
              component={<Link to="/Chat" className="chat" />}
              className="menu4"
                >
              <h2>· Chat</h2>
            </MenuItem>

            <MenuItem
              component={<Link to="/Profile" className="profile" />}
              className="menu5"
                >
              <h2>· Profile</h2>
            </MenuItem>
          </Menu>

          <div className='like_circle_list_wrap'>
            <button onClick={likeCircleToggle}>
              <h3>♥ like circle list <img src={arrowBottomIcon} alt="펼치기/접기" /></h3>
            </button>
              <ul className={`like_circle_list ${listToggle ? 'active' : ''}`}
               style={{ display: listToggle? 'block' : 'none' }}>
                <li>· 모임 1 <img src={arrowRightIcon} alt="이동하기" /></li>
                <li>· 모임 2 <img src={arrowRightIcon} alt="이동하기" /></li>
                <li>· 모임 3 <img src={arrowRightIcon} alt="이동하기" /></li>
              </ul>
          </div>
          
        </Sidebar>      
        
        </div>

        
    )
}
export default SideMenu;