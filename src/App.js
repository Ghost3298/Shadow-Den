import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Button from './components/Button';
import Profile from './images/profile.png';
import Games from './images/games.png';
import Location from './images/location.png';
import Instagram from './images/instagram.png';
/*import Services from './images/services.png';
import Rules from './images/rules.png';*/
import GamesList from './components/GamesList.js';
import Users from './components/Users';

const Home = () => (
  <div className="App">
    <h2>
      SHADOW <span style={{ color: 'red' }}>DEN</span>
    </h2>
    <div className="buttonContainer">
      <Link to="/check-profile">
        <Button title="Check Profile" image={Profile} />
      </Link>
      <Link to="/games-list">
        <Button title="Games List" image={Games} />
      </Link>
    </div>
    {/*
    <div className="buttonContainer">
      <Button title="Services" image={Services} />
      <Button title="Rules" image={Rules} />
    </div>
*/}
    <div className="buttonContainer">
      <a
        href="https://www.google.com/maps/place/Shadow+Den+Gaming+Lounge/@33.5185792,35.3944646,17.25z/data=!4m6!3m5!1s0x151eef44ed861959:0x45d31b6ae956c441!8m2!3d33.5182382!4d35.3923438!16s%2Fg%2F11v9gh34y9?entry=ttu"
        target="_blank"
        rel="noreferrer"
      >
        <Button title="Location" image={Location} />
      </a>
      <a
        href="https://www.instagram.com/shadow.den.lb"
        target="_blank"
        rel="noreferrer"
      >
        <Button title="Instagram" image={Instagram} />
      </a>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games-list" element={<GamesList />} />
        <Route path="/check-profile" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
