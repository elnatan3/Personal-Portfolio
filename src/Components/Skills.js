import React from 'react';
import './Styles/Skills.css';
import cert1 from './Images/ebay.jpg'; 
import cert2 from './Images/codepath.jpg'; 
import cert3 from './Images/learning_1.jpg';
import cert4 from './Images/learning_4.jpg';
import cert5 from './Images/google_1.jpg';
import cert6 from './Images/learning_0.jpg';
import cert7 from './Images/learning_2.jpg';
import cert8 from './Images/learning_5.jpg';
import cert9 from './Images/learning_3.jpg';
import cert10 from './Images/learning_7.jpg';
import cert11 from './Images/learning_6.jpg';

const Skills = () => {
  const certifications = [
    { imgSrc: cert1},
    { imgSrc: cert2},
    { imgSrc: cert3},
    { imgSrc: cert4},
    { imgSrc: cert5},
    { imgSrc: cert6},
    { imgSrc: cert7},
    { imgSrc: cert8},
    { imgSrc: cert9},
    { imgSrc: cert10},
    { imgSrc: cert11},
    
  ];

  return (
    <div className="skills-section" id="skills">
      <h2>Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <img src={cert.imgSrc} alt={cert.title} className="certification-image"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
