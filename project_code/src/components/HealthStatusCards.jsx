import '../styles/HealthStatusCards.css';

const cards = [
  { label: 'Lungs', emoji: '🫁', date: '26 Oct 2021', color: '#ff4c4c', progress: 70 },
  { label: 'Teeth', emoji: '🦷', date: '26 Oct 2021', color: '#20c6c6', progress: 70 },
  { label: 'Bone', emoji: '🦴', date: '26 Oct 2021', color: '#ffa500', progress: 70 }
];

const HealthStatusCards = () => (
  <div className="health-status-container">
    <div className="health-status-cards">
      {cards.map(card => (
        <div className="health-card" key={card.label}>
          <div className="health-card-header">
            <span className="health-card-emoji">{card.emoji}</span>
            <div className="health-card-title">{card.label}</div>
          </div>
          <div className="health-card-date">Date: {card.date}</div>
          <div className="health-card-bar">
            <div
              className="health-card-bar-fill"
              style={{
                width: `${card.progress}%`,
                backgroundColor: card.color,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
    <div className="details-link">
      <span>Details →</span>
    </div>
  </div>
);

export default HealthStatusCards;