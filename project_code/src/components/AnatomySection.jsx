import { useState } from 'react';
import '../styles/AnatomySection.css';
import humanBodyImage from '../assets/humanbody.png';
import { FiZoomIn } from 'react-icons/fi';

const AnatomySection = () => {


  return (
    <div className="anatomy-container">
      <div className={`anatomy-section `}>
       <button className="zoom-button">
          <FiZoomIn size={20} />
        </button>
        <img src={humanBodyImage} alt="Human Anatomy" className="anatomy-img" />
      </div>
     
    </div>
  );
};

export default AnatomySection;