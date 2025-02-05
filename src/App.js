import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import MakeCircle from './components/MakeCircle'
import Schedule from './components/Schedule';

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
                <Route path="/Makecircle" element={<MakeCircle />} />
                <Route path="/Schedule" element={<Schedule />} />
                <Route path="/Footer" element={<Footer />} />
              </Routes>
            </div>
            <Footer />
      </Router>
    </div>
  );
}

export default App;
