// src/components/Card.js
import React from 'react';
import './Card.css'; // Import custom CSS for Card styling

function Card({ title, description, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;
