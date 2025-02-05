import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import Chat from './components/Chat';
import ChatMessage from './components/ChatMessage'
import ProfileInfo from './components/ProfileInfo'

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
                <Route path="/Header" element={<Header />} />
                <Route path="/SideMenu" element={<SideMenu />} />
                <Route path="/" element={<Content />} />
                <Route path="/Chat" element={<Chat />} />
                <Route path="/ChatMessage" element={<ChatMessage />} />
                <Route path="/ProfileInfo" element={<ProfileInfo />} />
                <Route path="/Footer" element={<Footer />} />
              </Routes>
            </div>
            <Footer />
      </Router>
    </div>
  );
}

export default App;
