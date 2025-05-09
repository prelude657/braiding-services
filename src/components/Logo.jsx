import React from 'react';
import './Logo.css';
import Baby from './photos/Baby.png';

function Logo() {
  return (
    <div className="logoContainer">
      <span className="logoText leftText">BAIANA</span>
      <img src={Baby} alt="Baby Logo" className="logoImage" />
      <span className="logoText rightText">BRAIDS</span>
    </div>
  );
}

export default Logo;
