import '../styles/UpcomingSchedule.css';

const thursday = [
  { title: 'Health checkup complete', time: '11:00 AM', emoji: '💉' },
  { title: 'Ophthalmologist', time: '14:00 PM', emoji: '👁️' }
];

const saturday = [
  { title: 'Cardiologist', time: '12:00 AM', emoji: '❤️' },
  { title: 'Neurologist', time: '16:00 PM', emoji: '🧑🏻‍⚕️' }
];

const AppointmentCard = ({ title, time, emoji }) => (
  <div className="appointment-card">
    <div className="appointment-details">
      <div className="appointment-title">{title}</div>
      <div className="appointment-time">{time}</div>
    </div>
    <div className="appointment-emoji">{emoji}</div>
  </div>
);

const UpcomingSchedule = () => (
  <div className="upcoming-schedule">
    <h3>The Upcoming Schedule</h3>
    <div className="schedule-section">
      <div className="schedule-day">On Thursday</div>
      <div className="schedule-cards">
        {thursday.map((item, idx) => <AppointmentCard key={idx} {...item} />)}
      </div>
    </div>
    <div className="schedule-section">
      <div className="schedule-day">On Saturday</div>
      <div className="schedule-cards">
        {saturday.map((item, idx) => <AppointmentCard key={idx} {...item} />)}
      </div>
    </div>
  </div>
);

export default UpcomingSchedule;