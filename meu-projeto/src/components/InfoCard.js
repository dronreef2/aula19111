// src/components/InfoCard.js
import React from 'react';
import './InfoCard.css'; // Importando o CSS para estilização

const InfoCard = ({ title, description }) => {
  return (
    <div className="info-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default InfoCard;