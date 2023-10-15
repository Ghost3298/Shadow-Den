import React from 'react';

const Button = ({ title, image }) => {
  return (
    <div className="Button">
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </div>
  );
}

export default Button;
