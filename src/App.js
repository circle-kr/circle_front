import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Content from './components/Content';
import SideMenu from './components/SideMenu.js';
import Footer from './components/Footer';
import JoinedCircle from './components/JoinedCircle.js'

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
                <Route path="/JoinedCircle" element={<JoinedCircle />} />
              </Routes>
            </div>
            <Footer />
      </Router>
    </div>
  );
}

export default App;
