import { navigationLinks } from '../data/navigation';
import '../styles/Sidebar.css';
import React, { useState, useEffect } from 'react';
import { MdSupportAgent, MdSettings, MdMenu } from "react-icons/md";
import { PiChatTeardropDotsDuotone } from "react-icons/pi";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024; // lg and below
      setIsMobile(mobile);
      if (!mobile) setIsSidebarOpen(false); // Auto close on desktop
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {isMobile && (
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <MdMenu />
        </div>
      )}

      {/* Desktop or Expanded Mobile Sidebar */}
      <aside className={`sidebar ${isMobile ? 'mobile' : ''} ${isSidebarOpen ? 'open' : ''}`}>
        <div>
          <div className="sidebar-title">Healthcare.</div>

          <div className="sidebar-section">General</div>
          <ul className="sidebar-links">
            {navigationLinks.map(link => (
              <li key={link.label} onClick={isMobile ? toggleSidebar : null}>
                <span className="icon">{React.createElement(link.icon)}</span>
                {!isMobile && link.label}
              </li>
            ))}
          </ul>

          <div className="sidebar-section">Tools</div>
          <ul className="sidebar-links">
            <li onClick={isMobile ? toggleSidebar : null}>
              <span className="icon"><PiChatTeardropDotsDuotone /></span>
              {!isMobile && 'Chat'}
            </li>
            <li onClick={isMobile ? toggleSidebar : null}>
              <span className="icon"><MdSupportAgent /></span>
              {!isMobile && 'Support'}
            </li>
          </ul>
        </div>

        <ul className="sidebar-links settings-section">
          <li className="settings-link" onClick={isMobile ? toggleSidebar : null}>
            <span className="icon"><MdSettings /></span>
            {!isMobile && 'Setting'}
          </li>
        </ul>
      </aside>

      {/* Overlay on mobile when sidebar is open */}
      {isMobile && isSidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Sidebar;
