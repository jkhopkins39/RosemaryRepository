// src/components/Button.js
import React from 'react';
import './Button.css';  // Import custom CSS for button styling

function Button({ label, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
