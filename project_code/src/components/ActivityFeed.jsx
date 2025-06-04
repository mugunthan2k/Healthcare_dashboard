import '../styles/ActivityFeed.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const bars = [2, 4, 3, 5, 2, 3, 1];

const ActivityFeed = () => (
  <div className="activity-feed">
    <div className="activity-header">
      <div className="activity-title">Activity</div>
      <div className="activity-count">3 appointments this week</div>
    </div>
    <div className="activity-bars">
      {bars.map((val, idx) => (
        <div className="activity-bar-group" key={idx}>
          <div className="activity-bar" style={{ height: `${val * 16}px` }}></div>
          <div className={`activity-day ${idx === new Date().getDay() - 1 ? 'current' : ''}`}>
            {days[idx]}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityFeed;