import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import '../SideMenu.css'

function SideMenu({collapsed}) {
    return(
        <div style={{  height: "100vh" }}>
        <Sidebar collapsed={collapsed} className='side_menu_wrap'>
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
            <MenuItem>- Timeline Chart </MenuItem>
            <MenuItem>- Bubble Chart </MenuItem>
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
        </Sidebar>
      </div>
    )
}
export default SideMenu;