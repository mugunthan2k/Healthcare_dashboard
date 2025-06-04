import { useState } from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../styles/DashboardMainContent.css';
import { FiChevronDown } from 'react-icons/fi';

const DashboardMainContent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dashboard-main">
      <div className="dashboard-content">
        <div className="dashboard-left">
          <div className="dashboard-header">
            <h2>Dashboard</h2>
            <div className="week-dropdown">
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                This Week <FiChevronDown className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {/* Empty dropdown content */}
                </div>
              )}
            </div>
          </div>
          <div className='dashboard-inner-left'>
            <AnatomySection />
            <HealthStatusCards />
          </div>
          <ActivityFeed />
        </div>
        <div className="dashboard-right">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;