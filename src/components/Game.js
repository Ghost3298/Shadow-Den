import React from 'react';

const Game = ({ title, image , tags}) => {
  return (
    <div className="line App">
      <img src={image} alt={title} />
      <table>
        <tr>
          <h3>{title}</h3>
        </tr>
        <tr>
          <p>{tags}</p>
        </tr>
      </table>
    </div>
  );
}

export default Game;
