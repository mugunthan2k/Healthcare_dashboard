import '../styles/CalendarView.css';

const CalendarView = () => (
  <div className="calendar-view">
    <div className="calendar-header">
      <span>October 2021</span>
      <div className="calendar-arrows">
        <span className="arrow">←</span>
        <span className="arrow">→</span>
      </div>
    </div>
    
    <div className="calendar-days-grid">
      <div>Mon</div>
      <div>Tues</div>
      <div>Wed</div>
      <div>Thurs</div>
      <div>Fri</div>
      <div>Sat</div>
      <div>Sun</div>
    </div>
    
    <div className="calendar-dates-grid">
      <div>25</div>
      <div className="highlight-date">26</div>
      <div>27</div>
      <div className="highlight-date">28</div>
      <div>29</div>
      <div className="highlight-date">30</div>
      <div className="highlight-date">31</div>
    </div>
    
    <div className="calendar-times-grid">
      <div>10:00</div>
      <div>08:00</div>
      <div>12:00</div>
      <div>10:00</div>
      <div>—</div>
      <div className="highlight-time">12:00</div>
      <div className="highlight-time">09:00</div>
      
      <div>11:00</div>
      <div className="highlight-time darkblue">09:00</div>
      <div>—</div>
      <div className="highlight-time lightgray">11:00</div>
      <div>14:00</div>
      <div>14:00</div>
      <div>10:00</div>
      
      <div>12:00</div>
      <div>10:00</div>
      <div>13:00</div>
      <div>—</div>
      <div>16:00</div>
      <div>15:00</div>
      <div>11:00</div>
    </div>
    
    <div className="calendar-appointments">
      <div className="appointment-card dentist">
        <div className="appointment-emoji">🦷</div>
        <div className="appointment-content">
          <div className="appointment-title">Dentist</div>
          <div className="appointment-time" style={{color:"white"}}>09:00-11:00</div>
          <div className="appointment-doctor">Dr. Cameron Williamson</div>
        </div>
      </div>
      
      <div className="appointment-card physio">
        <div className="appointment-emoji">💪</div>
        <div className="appointment-content">
          <div className="appointment-title">Physiotherapy Appointment</div>
          <div className="appointment-time" style={{color:"black"}}>11:00-12:00</div>
          <div className="appointment-doctor">Dr. Kevin Djones</div>
        </div>
      </div>
    </div>
  </div>
);

export default CalendarView;