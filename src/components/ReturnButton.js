/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../images/home.png';

const ReturnButton = () => {
  return (
    <Link to="/">
      <button className="back-button"><img src={Home} style={{ height: '20px' , top : '-5px', position : 'relative' }}/></button>
    </Link>
  );
};

export default ReturnButton;
