import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Content from './components/Content';
import SideMenu from './components/SideMenu.js';
import Footer from './components/Footer';
import JoinedCircle01 from './components/JoinedCircle01.js'
import JoinedCircle02 from './components/JoinedCircle02.js'

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
                <Route path="/JoinedCircle01" element={<JoinedCircle01 />} />
                <Route path="/JoinedCircle02" element={<JoinedCircle02 />} />
              </Routes>
            </div>
            <Footer />
      </Router>
    </div>
  );
}

export default App;
