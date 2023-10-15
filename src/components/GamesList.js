import React from 'react';
import ReturnButton from './ReturnButton';  // Adjust the import path based on your file structure
import Game from './Game.js';
import CS2 from '../images/cs2.png';
import PUBG from '../images/pubg.png';
import APEX from '../images/apex.png';
import Dota from '../images/dota2.png';

const GamesList = () => {
  return (
    <div className="App">
      <h2>
        SHADOW <span style={{ color: 'red' }}>DEN</span>
      </h2>
        <Game title="Counter Strike 2" tags="FPS, Shooter, Multiplayer, Competitive, Action" image={CS2} />
        <Game title="PlayerUnknown's Battlegrounds" tags="Survival, Shooter, Battle Royale, Multiplayer" image={PUBG} />
        <Game title="Apex: Legends" tags="Multiplayer, Battle Royale, Shooter" image={APEX} />
        <Game title="Dota 2" tags="MOBA, Multiplayer, Strategy, PvP" image={Dota} />
        <ReturnButton />
    </div>
  );
};

export default GamesList;
