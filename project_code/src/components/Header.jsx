import { FaBell, FaPlusSquare, FaSearch, FaBars } from "react-icons/fa";
import '../styles/Header.css';

const Header = ({ isMobile, toggleSidebar }) => (
  <header className="header">
    <div className="header-left">
      {isMobile && (
        <button className="menu-button" onClick={toggleSidebar}>
          <FaBars className="menu-icon" />
        </button>
      )}
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input className="search-bar" placeholder="Search" />
        <FaBell className="bell-icon" />
      </div>
    </div>
    <div className="header-actions">
      <span className="user-avatar">👩🏻‍🦱</span>
      <FaPlusSquare className="icon-plus" />
    </div>
  </header>
);

export default Header;