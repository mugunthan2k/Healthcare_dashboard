import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Sidebar 
        isMobile={isMobile} 
        isSidebarOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
      />
      {isMobile && isSidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}
      <div className="main-content">
        <Header 
          isMobile={isMobile} 
          toggleSidebar={toggleSidebar} 
        />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;