import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import JoinCircle from './components/JoinCircle'
import Schedule from './components/Schedule'
import SchedulePopUp from './components/SchedulePopUp';

function App() {
    const [collapsed, setCollapsed] = useState(false); 
    const toggleSidebar = () => {
      setCollapsed(!collapsed); 
    };

  return (
    <div className="App">
      <Router basename='/'>
            <Header sidemenuToggle={toggleSidebar}/>
            <div className="container">
              <SideMenu collapsed={collapsed}/>
              <Routes>
                <Route path="/Header" element={<Header />} />
                <Route path="/" element={<Content />} />
                <Route path="/Joincircle" element={<JoinCircle />} />
                <Route path="/Schedule" element={<Schedule />} />
                <Route path="/SchedulePopUp" element={<SchedulePopUp />} />
                <Route path="/Footer" element={<Footer />} />
              </Routes>
            </div>
            <Footer />
      </Router>
    </div>
  );
}

export default App;
