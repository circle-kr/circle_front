import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Content from './components/Content';
import SideMenu from './components/SideMenu.js';
import Footer from './components/Footer';
import JoinCircle from './components/JoinCircle.js'
import MakeCircle from './components/MakeCircle.js'
import JoinedCircle from './components/JoinedCircle.js'
import Notification from './components/Notification.js'
import Chat from './components/Chat';
import Profile from './components/Profile.js'
import SignIn from './components/SignIn.js'
import SignUp from './components/SignUp.js'

function App() {
    const [collapsed, setCollapsed] = useState(false); // 열고 닫힘 상태
    const toggleSidebar = () => {
      setCollapsed(!collapsed); // 토글
    };

  return (
    <div className="App">
      <Router basename='/'>
            <Header sidemenuToggle={toggleSidebar}/>
            <div className="container">
              <SideMenu collapsed={collapsed}/>
              <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/Joincircle" element={<JoinCircle />} />
                <Route path="/MakeCircle" element={<MakeCircle />} />
                <Route path="/JoinedCircle" element={<JoinedCircle />} />
                <Route path="/Notification" element={<Notification />} />
                <Route path="/Chat" element={<Chat />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/SignUp" element={<SignUp />} />
              </Routes>
            </div>
            <Footer />
      </Router>
    </div>
  );
}

export default App;
