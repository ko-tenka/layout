import React from 'react';
import './Card.css';

const Card = ({ title, description, onClick, active }) => {
  return (
    <div className={`card ${active ? 'active' : ''}`} onClick={onClick}>
      <div className="card-title" title={title}>{title}</div>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
