import '../styles/SimpleAppointmentCard.css';

const icons = {
  check: '✔️',
  eye: '👁️',
  heart: '❤️',
  brain: '🧠'
};

const SimpleAppointmentCard = ({ title, time, icon }) => (
  <div className="simple-appointment-card">
    <span className="appointment-icon">{icons[icon]}</span>
    <div>
      <div className="appointment-title">{title}</div>
      <div className="appointment-time">{time}</div>
    </div>
  </div>
);
export default SimpleAppointmentCard;
