import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import CircleCardUi from './components/CircleCardUi';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import JoinCircle from './components/JoinCircle';
import MakeCircle from './components/MakeCircle';
import JoinedCircle01 from './components/JoinedCircle01';
import Notification from './components/Notification';
import RequestPopUp from './components/RequestPopUp';
import Chat from './components/Chat';
import ChatMessage from './components/ChatMessage';
import ProfileInfo from './components/ProfileInfo';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Schedule from './components/Schedule';
import SchedulePopUp from './components/SchedulePopUp';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header sidemenuToggle={toggleSidebar} />
          <div className="container">
            <SideMenu collapsed={collapsed} />
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/CircleCardUi" element={<CircleCardUi />} />
              <Route path="/Joincircle" element={<JoinCircle />} />
              <Route path="/MakeCircle" element={<MakeCircle />} />
              <Route path="/JoinedCircle01" element={<JoinedCircle01 />} />
              <Route path="/Notification" element={<Notification />} />
              <Route path="/RequestPopUp" element={<RequestPopUp />} />
              <Route path="/Chat" element={<Chat />} />
              <Route path="/ChatMessage" element={<ChatMessage />} />
              <Route path="/ProfileInfo" element={<ProfileInfo />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Schedule" element={<Schedule />} />
              <Route path="/SchedulePopUp" element={<SchedulePopUp />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
