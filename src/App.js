import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import JoinCircle from './components/JoinCircle'
import MakeCircle from './components/MakeCircle'
import JoinedCircle from './components/JoinedCircle'
import Notification from './components/Notification'
import Chat from './components/Chat';
import ChatMessage from './components/ChatMessage';
import ProfileInfo from './components/ProfileInfo'
import Profile from './components/Profile'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
    const [collapsed, setCollapsed] = useState(false); // 열고 닫힘 상태
    const toggleSidebar = () => {
      setCollapsed(!collapsed); // 토글
    };

  return (
    <div className="App">
      <Router>
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
              <Route path="/ChatMessage" element={<ChatMessage />} />
              <Route path="/ProfileInfo" element={<ProfileInfo />} />
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
